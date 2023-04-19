//#region Import
import CryptoJS from "crypto-js";
import { Request, Response } from "express";
import { UserModel } from "../../models/user/user.models";
import { SingleApiResponse } from "../../helpers/response.helper";
import { IUser } from "../../interface/user/user.interface";
import { MailerHelper } from "../../helpers/mailer.helper";
import * as dotenv from "dotenv";

const { Mailer } = MailerHelper;
dotenv.config();
//#endregion

const secretKey = process.env.TOKEN_KEY as string;

const ForgotPassword = async (req: Request, res: Response) => {
	try {
		// Get email in request body
		const email = req.body.email;

		// Find user using email
		const user = await UserModel.findOne<IUser>({ email: email });

		// Flagger
		if (!user)
			return res.status(200).json(
				SingleApiResponse({
					success: true,
					data: null,
					statusCode: 404
				})
			);

		// Generate Random Password
		const randomPassword = CryptoJS.lib.WordArray.random(16).toString(
			CryptoJS.enc.Hex
		);

		// Update then save
		const updatedUser = await UserModel.findOneAndUpdate<IUser>(
			{ email: email },
			{
				password: CryptoJS.AES.encrypt(
					randomPassword,
					secretKey
				).toString()
			}
		);

		// Flagger
		if (updatedUser !== null) {
			// Send email
			await Mailer({
				from: "your@email.com",
				to: updatedUser.email,
				subject: "New Password",
				text: "Hello this is your new password",
				html: `Password: <b>${randomPassword}</b>`
			});
			return res.status(200).json(
				SingleApiResponse({
					success: true,
					data: updatedUser,
					statusCode: 200
				})
			);
		}
	} catch (err) {
		return res.status(500).json(
			SingleApiResponse({
				success: false,
				data: null,
				statusCode: 500
			})
		);
	}
};

export { ForgotPassword };
