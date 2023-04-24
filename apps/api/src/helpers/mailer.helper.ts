//#region Import
import nodemailer from "nodemailer";
import { IMailer } from "../interface/mailer.interface";
//#endregion

/**
 * @name Mailer 
 * @memberof Helpers
 * @description Function for sending email
 * @param req - Object passed by client
 * @param res - Object to be passed by server
 * @return Array
 */
const Mailer = async ({ from, to, subject, text, html }: IMailer) => {
	// Reusable transport object using default SMTP
	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: `${process.env.MAILER_USER}`,
			pass: `${process.env.MAILER_PASSWORD}`
		}
	});

	await transporter.sendMail({
		from: `${from}`,
		to: `${to}`,
		subject: `${subject}`,
		text: `${text}`,
		html: `${html}`
	});
};

export const MailerHelper = {
	Mailer
};
