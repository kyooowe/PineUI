//#region Import
import { UserModel } from "../../models/user/user.models";
import { AccessTokenModel } from "../../models/access_token/access_token.model";
import { Request, Response } from "express";
import { SingleApiResponse } from "../../helpers/response.helper";
import { IUser } from "../../interface/user/user.interface";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";

import * as dotenv from "dotenv";
import { IAccessToken } from "../../interface/access_token/access_token.interface";
dotenv.config();
//#endregion

const secretKey = process.env.TOKEN_KEY as string;
const accessSecretKey = process.env.ACCESS_TOKEN_KEY as string;

//#region Action
const Login = async (req: Request, res: Response) => {
	try {
		const email = req.body.email;
		const password = req.body.password;

		// Fetch user based on email and password
		const user = await UserModel.findOne<IUser>({ email: email });

		if (!user)
			return res.status(200).json(
				SingleApiResponse({
					success: true,
					data: null,
					statusCode: 404
				})
			);

		// Check if hash password is equal
		const decyptedPassword = CryptoJS.AES.decrypt(
			user.password,
			secretKey
		).toString(CryptoJS.enc.Utf8);

		// Flagger for password
		if (password !== decyptedPassword)
			return res.status(200).json(
				SingleApiResponse({
					success: true,
					data: null,
					statusCode: 404
				})
			);

		// Token Generation
		const token = jwt.sign({ id: user._id.toString() }, `${secretKey}`, {
			expiresIn: "2h"
		});
		const accessToken = jwt.sign(
			{ id: user._id.toString() },
			`${accessSecretKey}`,
			{ expiresIn: "7d" }
		);

		// Check if user access token is already existing
		const userAccessToken = await AccessTokenModel.findOne<IAccessToken>({
			userId: user._id
		});

		if (userAccessToken === null) {
			// Save Access Token
			const newUserAccessToken = new AccessTokenModel({
				userId: user._id.toString(),
				accessToken: accessToken
			});

			await newUserAccessToken.save();
		}

		// Return
		return res.status(200).json(
			SingleApiResponse({
				success: true,
				data: { user, token: token, accessToken: userAccessToken ? userAccessToken.accessToken : accessToken },
				statusCode: 200
			})
		);
	} catch (error: unknown) {
		return res.status(500).json(
			SingleApiResponse({
				success: false,
				data: null,
				statusCode: 500
			})
		);
	}
};

export { Login };
//#endregion
