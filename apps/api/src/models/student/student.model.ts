import { Schema, model } from "mongoose";
import { IStudent } from "../../interface/student/student.interface";

//#region Schema and Model
const studentSchema = new Schema<IStudent>({
    studentNumber: { type: String, required: true },
    studentName: { type: String, required: true },
    class: { type: String, required: true },
    level: { type: String, required: true },
    admissionDate: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
    dateCreated: { type: Date, default: Date.now() },
    createdBy: { type: String, required: true },
    dateUpdated: { type: Date, required: true, default: Date.now() },
    updatedBy: { type: String, required: true }
})

const StudentModel = model<IStudent>("Student", studentSchema)
//#endregion

export { StudentModel }
