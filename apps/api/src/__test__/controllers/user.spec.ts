//#region Import
import { CreateUser } from "../../controller/user/user.controller";
import { Request } from "express";
import mongoose from "mongoose";
import { UserModel } from "../../models/user/user.models";
import { IUser } from "../../interface/user/user.interface";
//#endregion

//#region Constant and Mock
const mockUserValue: IUser = {
	_id: new mongoose.Types.ObjectId(),
	firstName: "testFirstname",
	middleName: "testMiddlename",
	lastName: "testLastname",
	email: "test@example.com",
	password: "testpassword",
	createdBy: 1,
	updatedBy: 1,
	dateCreated: new Date(),
	dateUpdated: new Date()
};
//#endregion

describe("Create:User", () => {
	// Create timeout
	jest.setTimeout(20000);

	let mockRequest;
	let mockResponse;

	beforeEach(() => {
		mockRequest = {
			body: {
				firstName: "testFirstname",
				middleName: "testMiddlename",
				lastName: "testLastname",
				email: "test@example.com",
				password: "testpassword"
			}
		};
		mockResponse = {
			status: jest.fn().mockReturnThis(),
			json: jest.fn()
		};
	});

	afterEach(() => {
		jest.resetAllMocks();
	});

	it("should return a 409 status code when user already exist", async () => {
		// Create request object
		const req = {
			body: {
				email: "test@example.com"
			}
		};

		// Create mock response
		const res = mockResponse;

		// Spy on mongoose function
		UserModel.findOne = jest.fn().mockResolvedValueOnce(mockUserValue);

		// Act
		await CreateUser(req as Request, res);

		// Expected Result
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			count: 0,
			success: true,
			data: null,
			statusCode: 409,
			statusText: "Data already exists"
		});
	});

	it("should return created user and token", async () => {
		// Mock Request and Response
		const req = mockRequest;
		const res = mockResponse;

		// Spy on mongoose function
		jest.spyOn(UserModel.prototype, "save").mockImplementationOnce(() =>
			Promise.resolve(mockUserValue)
		);

		// Act
		await CreateUser(req, res);

		// Expected Result
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			count: 1,
			success: true,
			data: {
				newAccount: mockUserValue,
				token: expect.any(String)
			},
			statusCode: 200,
			statusText: "Success!"
		});
	});
});
