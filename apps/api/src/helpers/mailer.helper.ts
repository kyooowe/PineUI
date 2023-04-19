//#region Import
import nodemailer from "nodemailer";
import { IMailer } from "../interface/mailer.interface";
//#endregion

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
