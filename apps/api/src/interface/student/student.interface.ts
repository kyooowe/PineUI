//#region Import
import mongoose from "mongoose";
import { IBase } from "../base.interface";
//#endregion

// Model
interface IStudent extends IBase {
    _id: mongoose.Types.ObjectId;
    studentNumber: string;
    studentName: string;
    class: string;
    level: string;
    admissionDate: Date;
    isActive: boolean;
}

// Request
interface ICreateStudentRequest {
    studentNumber: string;
    studentName: string;
    class: string;
    level: string;
    admissionDate: Date;
}

export type { IStudent, ICreateStudentRequest }