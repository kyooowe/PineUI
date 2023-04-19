//#region Import
import { Router } from "express";
import { GetStudents, CreateStudent } from "../../controller/student/student.controller";
import { AuthMiddleware } from "../../middleware/auth.middleware";
//#endregion

//#region Action
const StudentRouter = Router()
StudentRouter.get('/', AuthMiddleware, GetStudents)
StudentRouter.post('/', AuthMiddleware, CreateStudent)
//#endregion

export { StudentRouter }