//#region Import
import { Router } from "express";
import { GetStudents, CreateStudent, UpdateStudent, DeleteStudent, RestoreStudent } from "../../controller/student/student.controller";
import { AuthMiddleware } from "../../middleware/auth.middleware";
//#endregion

//#region Action
const StudentRouter = Router()
StudentRouter.get('/:searchType/:searchKey/:pageNumber', AuthMiddleware, GetStudents)
StudentRouter.post('/', AuthMiddleware, CreateStudent)
StudentRouter.put('/', AuthMiddleware, UpdateStudent)
StudentRouter.get('/restore/:studentId', AuthMiddleware, RestoreStudent)
StudentRouter.delete('/:studentId', AuthMiddleware, DeleteStudent)
//#endregion

export { StudentRouter }