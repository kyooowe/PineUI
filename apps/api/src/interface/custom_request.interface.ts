import { Request } from "express";

interface CustomRequest extends Request {
	id: string;
}

export type { CustomRequest };
