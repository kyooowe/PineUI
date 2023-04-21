//#region Import
import { StudentModel } from '../../models/student/student.model'
import { ICreateStudentRequest, IStudent, IUpdateStudentRequest } from '../../interface/student/student.interface'
import { Request, Response } from "express";
import { SingleApiResponse } from "../../helpers/response.helper";
import { CustomRequest } from '../../interface/custom_request.interface'
//#endregion

/**
 * @name ValidateStudent 
 * @memberof Helpers
 * @description All validation required before creating or update student
 * @param type (String) - determine the type of validation
 * @param value (String) - value to validate, can act as Student Name and Student Number
 * @param name (String) - helper value, act as an Student Name
 * @return Boolean - True as Valid to Create or Update, False as Not Valid
 */
const ValidateStudent = async (type: "SNumber" | "SName", value: string, id?: string): Promise<boolean | undefined> => {

    if (type === "SName") {

        // Fetch student based on requested name
        const student = await StudentModel.findOne<IStudent>({ studentName: { $regex: value, $options: 'i' }, _id: { $ne: id } })

        if (student)
            if (value === student.studentName)
                return false

        return true
    }

    if (type === 'SNumber') {

        // Fetch student based on requested student number
        const student = await StudentModel.findOne<IStudent>({ studentNumber: value, _id: { $ne: id } })

        if (student)
            return false

        return true;
    }
}

/**
 * @name Fetch 
 * @memberof Helpers
 * @description Function for fetching data as list or single using _id
 * @param single (Boolean) - determine if the fetch must be list or single
 * @param value (String) - value to fetch
 * @return Object or Array 
 */
const Fetch = async (single = false, columnName?: keyof IStudent, value?: string | number): Promise<IStudent | IStudent[] | null> => {

    if (!single)
        return await StudentModel.find<IStudent>({ isActive: true });
    else {
        const query: Record<string, unknown> = {};

        if (columnName && value)
            query[columnName] = value;

        return await StudentModel.findOne<IStudent>(query)
    }

}

/**
 * @name GetStudents 
 * @memberof Actions
 * @description Fetch all students
 * @param req - Object passed by client
 * @param res - Object to be passed by server
 * @return Array
 */
const GetStudents = async (req: Request, res: Response): Promise<Response> => {

    // Extracting request
    const searchType = req.params.searchType as string;

    try {

        // Search Students
        let students: IStudent[] = []

        if (searchType.toLowerCase() === 'active')
            students = await StudentModel.find<IStudent>({ isActive: true })

        if (searchType.toLowerCase() === 'inactive')
            students = await StudentModel.find<IStudent>({ isActive: false })

        if (searchType.toLowerCase() === 'archive')
            students = await StudentModel.find<IStudent>({ isArchive: true })

        return res.status(200).json(
            SingleApiResponse({
                success: true,
                data: students,
                statusCode: 200
            })
        );
    } catch (error: unknown) {
        return res.status(500).json(
            SingleApiResponse({
                success: false,
                data: null,
                statusCode: 500
            })
        );
    }
}

/**
 * @name SearchStudents 
 * @memberof Actions
 * @description Search student based on the searchKey passed using params
 * @param req - Object passed by client
 * @param res - Object to be passed by server
 * @return Array
 */
const SearchStudents = async (req: Request, res: Response): Promise<Response> => {

    // Extracting request
    const searchKey = req.params.searchKey as string;
    const searchType = req.params.searchType as string;

    try {

        // Search Students
        let students: IStudent[] = []

        if (searchType === 'active')
            students = await StudentModel.find<IStudent>(
                { isActive: true, isArchive: false, studentName: { $regex: searchKey, $options: 'i' } },
            )

        if (searchType === 'inactive')
            students = await StudentModel.find<IStudent>(
                { isActive: true, studentName: { $regex: searchKey, $options: 'i' } }
            )

        return res.status(200).json(
            SingleApiResponse({
                success: true,
                data: students,
                statusCode: 200
            })
        );
    } catch (error: unknown) {
        return res.status(500).json(
            SingleApiResponse({
                success: false,
                data: null,
                statusCode: 500
            })
        );
    }
}

/**
 * @name CreateStudent
 * @memberof Actions
 * @description Function for creating student
 * @param req - Object passed by client
 * @param res - Object to be passed by server
 * @returns Res
 */
const CreateStudent = async (req: Request, res: Response): Promise<Response> => {

    // Extracting request
    const { id: currentUserId } = req as CustomRequest
    const body = req.body as ICreateStudentRequest

    try {

        // Validation
        const isStudentNameValid = await ValidateStudent("SName", body.studentName)
        const isStudentNumberValid = await ValidateStudent("SNumber", body.studentNumber)

        if (!isStudentNameValid)
            return res.status(200).json(
                SingleApiResponse({
                    success: true,
                    data: null,
                    statusCode: 409,
                    message: 'Student Name already exist.'
                })
            );

        if (!isStudentNumberValid)
            return res.status(200).json(
                SingleApiResponse({
                    success: true,
                    data: null,
                    statusCode: 409,
                    message: 'Student Number already exist.'
                })
            );

        // Student Objet
        const newStudent = new StudentModel({
            studentNumber: body.studentNumber,
            studentName: body.studentName,
            class: body.class,
            level: body.level,
            admissionDate: body.admissionDate,
            createdBy: currentUserId,
            updatedBy: currentUserId
        })

        // Save student object
        await newStudent.save()

        return res.status(200).json(
            SingleApiResponse({
                success: true,
                data: newStudent,
                statusCode: 200
            })
        );

    } catch (error: unknown) {
        return res.status(500).json(
            SingleApiResponse({
                success: false,
                data: null,
                statusCode: 500
            })
        );
    }
}

/**
 * @name UpdateStudent
 * @memberof Actions
 * @description Function for updating student
 * @param req - Object passed by client
 * @param res - Object to be passed by server
 * @returns Res
 */
const UpdateStudent = async (req: Request, res: Response): Promise<Response> => {

    // Extracting request
    const { id: currentUserId } = req as CustomRequest
    const body = req.body as IUpdateStudentRequest

    try {

        // Validation
        const isStudentNameValid = await ValidateStudent("SName", body.studentName, body._id)
        const isStudentNumberValid = await ValidateStudent("SNumber", body.studentNumber, body._id)

        if (!isStudentNameValid)
            return res.status(200).json(
                SingleApiResponse({
                    success: true,
                    data: null,
                    statusCode: 409,
                    message: 'Student Name already exist.'
                })
            );

        if (!isStudentNumberValid)
            return res.status(200).json(
                SingleApiResponse({
                    success: true,
                    data: null,
                    statusCode: 409,
                    message: 'Student Number already exist.'
                })
            );

        // Trigger find then update
        const updatedUser = await StudentModel.findOneAndUpdate(
            { _id: body._id },
            {
                studentNumber: body.studentNumber,
                studentName: body.studentName,
                class: body.class,
                level: body.level,
                admissionDate: body.admissionDate,
                updatedBy: currentUserId,
                dateUpdated: Date.now()
            },
            { new: true }
        )

        return res.status(200).json(
            SingleApiResponse({
                success: true,
                data: updatedUser,
                statusCode: 200
            })
        );

    } catch (error: unknown) {
        return res.status(500).json(
            SingleApiResponse({
                success: false,
                data: null,
                statusCode: 500
            })
        );
    }
}

/**
 * @name RestoreStudent
 * @memberof Actions
 * @description Function for restoring student
 * @param req - Object passed by client
 * @param res - Object to be passed by server
 * @returns Res
 */
const RestoreStudent = async (req: Request, res: Response): Promise<Response> => {

    // Extracting request
    const { id: currentUserId } = req as CustomRequest
    const studentId = req.params.studentId as string;

    try {

        await StudentModel.findOneAndUpdate<IStudent>(
            { _id: studentId },
            { isActive: true, updatedBy: currentUserId, dateUpdated: Date.now() }
        )

        return res.status(200).json(
            SingleApiResponse({
                success: true,
                data: null,
                statusCode: 200
            })
        );

    } catch (error: unknown) {
        return res.status(500).json(
            SingleApiResponse({
                success: false,
                data: null,
                statusCode: 500
            })
        );
    }
}

/**
 * @name DeleteStudent
 * @memberof Actions
 * @description Function for deleting student
 * @param req - Object passed by client
 * @param res - Object to be passed by server
 * @returns Res
 */
const DeleteStudent = async (req: Request, res: Response): Promise<Response> => {

    // Extracting request
    const { id: currentUserId } = req as CustomRequest
    const studentId = req.params.studentId as string;

    try {

        await StudentModel.findOneAndUpdate<IStudent>(
            { _id: studentId },
            { isActive: false, updatedBy: currentUserId, dateUpdated: Date.now() }
        )

        return res.status(200).json(
            SingleApiResponse({
                success: true,
                data: null,
                statusCode: 200
            })
        );

    } catch (error) {
        return res.status(500).json(
            SingleApiResponse({
                success: false,
                data: null,
                statusCode: 500
            })
        );
    }
}

export { GetStudents, SearchStudents, CreateStudent, UpdateStudent, RestoreStudent, DeleteStudent }