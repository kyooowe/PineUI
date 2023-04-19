//#region Import
import mongoose from "mongoose";
import { IBase } from "../base.interface";
//#endregion

interface IUser extends IBase {
	_id: mongoose.Types.ObjectId;
	email: string;
	password: string;
	firstName: string;
	middleName: string;
	lastName: string;
}

export type { IUser };
