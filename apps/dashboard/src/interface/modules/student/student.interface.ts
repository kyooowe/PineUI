import { IBase } from "../base.interface";

// Component
export interface IStudentFormProps {
    onSubmit: (values: ICreateStudent) => void;
    formRef: any;
}

// Response
export interface IStudent extends IBase {
    _id: string;
    studentNumber: string;
    studentName: string;
    class: string;
    level: string;
    admissionDate: Date;
    isActive: boolean;
}

// Request
export interface ICreateStudent {
    studentNumber: string;
    studentName: string;
    class: string;
    level: string;
    admissionDate: Date;
}