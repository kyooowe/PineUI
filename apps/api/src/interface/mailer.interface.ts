interface IMailer {
	from: string;
	to: string;
	subject: string;
	text: string;
	html: string;
}

export type { IMailer };
