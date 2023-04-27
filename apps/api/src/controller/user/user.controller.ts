//#region Import
import { UserModel } from "../../models/user/user.models";
import { Request, Response } from "express";
import { SingleApiResponse } from "../../helpers/response.helper";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
import { IUser } from "../../interface/user/user.interface";

dotenv.config();
//#endregion

// Get the secret key in .env
const secretKey = process.env.TOKEN_KEY as string;

/**
 * @name CreateUser 
 * @memberof Actions
 * @description Function for creating user account
 * @param req - Object passed by client
 * @param res - Object to be passed by server
 * @return Array
 */
const CreateUser = async (req: Request, res: Response): Promise<Response> => {
	try {

		const isUserEmailExisting = await UserModel.findOne<IUser>({
			email: req.body.email
		});

		if (isUserEmailExisting)
			return res.status(200).json(
				SingleApiResponse({
					success: true,
					data: null,
					statusCode: 409
				})
			);

		// Create new User Model
		const user = new UserModel({
			email: req.body.email,
			password: CryptoJS.AES.encrypt(
				req.body.password,
				secretKey
			).toString(),
			firstName: req.body.firstName,
			middleName: req.body.middleName,
			lastName: req.body.lastName,
			updatedBy: '1',
			createdBy: '1'
		});

		// Save then Return the latest
		const newAccount = await user.save();

		const token = jwt.sign({ id: user._id.toString() }, `${secretKey}`, {
			expiresIn: "2h"
		});

		return res.status(200).json(
			SingleApiResponse({
				success: true,
				data: { newAccount, token: token },
				statusCode: 200
			})
		);
	} catch (error: unknown) {
		console.log(error)
		return res.status(500).json(
			SingleApiResponse({
				success: false,
				data: null,
				statusCode: 500
			})
		);
	}
};

export { CreateUser };
