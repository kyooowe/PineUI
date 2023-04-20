//#region Import
import { ForgotPassword } from "../../controller/authentication/forgotPassword.controller";
import { Request } from "express";
import mongoose from "mongoose";
import { MailerHelper } from "../../helpers/mailer.helper";
import { UserModel } from "../../models/user/user.models";
import { IUser } from "../../interface/user/user.interface";
//#endregion

//#region Constant and Mock
jest.mock("../../helpers/mailer.helper.ts", () => ({
	MailerHelper: {
		Mailer: jest.fn()
	}
}));

const mockUserValue: IUser = {
	_id: new mongoose.Types.ObjectId(),
	firstName: "testFirstname",
	middleName: "testMiddlename",
	lastName: "testLastname",
	email: "test@example.com",
	password: "testpassword",
	createdBy: "1",
	updatedBy: "1",
	dateCreated: new Date(),
	dateUpdated: new Date()
};
//#endregion

describe("ForgotPassword", () => {
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

	it("should returns a 404 status code when user is not found", async () => {
		// Req and Res
		const res = mockResponse;
		const req = {
			body: {
				email: "nonexistentuser@test.com"
			}
		};

		// mock mongoose function
		UserModel.findOne = jest.fn().mockResolvedValueOnce(null);

		// Act
		await ForgotPassword(req as Request, res);

		// Expected Result
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			count: 0,
			success: true,
			data: null,
			statusCode: 404,
			statusText: "Not Found!"
		});
	});

	it("should generate and save new password", async () => {
		// Req and Res
		const req = mockRequest;
		const res = mockResponse;

		// Spy on mongoose function
		UserModel.findOne = jest.fn().mockResolvedValueOnce(mockUserValue);
		UserModel.findOneAndUpdate = jest
			.fn()
			.mockResolvedValueOnce(mockUserValue);

		// Act
		await ForgotPassword(req, res);

		// Expected Result
		expect(UserModel.findOneAndUpdate).toHaveBeenCalledWith(
			{ email: mockUserValue.email },
			expect.objectContaining({ password: expect.any(String) })
		);
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			count: 1,
			success: true,
			data: mockUserValue,
			statusCode: 200,
			statusText: "Success!"
		});
	});

	it("should send an email with the new password to the user", async () => {
		// Req and Res
		const req = mockRequest;
		const res = mockResponse;

		// Spy on mongoose function
		UserModel.findOne = jest.fn().mockResolvedValueOnce(mockUserValue);
		UserModel.findOneAndUpdate = jest
			.fn()
			.mockResolvedValueOnce(mockUserValue);

		// Act
		await ForgotPassword(req, res);

		//  Expected Result
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			count: 1,
			success: true,
			data: expect.anything(),
			statusCode: 200,
			statusText: "Success!"
		});
		expect(MailerHelper.Mailer).toHaveBeenCalledWith({
			from: "your@email.com",
			to: mockUserValue.email,
			subject: "New Password",
			text: "Hello this is your new password",
			html: expect.any(String)
		});
	});

	it("should return 500 if an error occurs", async () => {
		// Req and Res
		const res = mockResponse;
		const req = mockRequest;

		// Mock mongoose function
		UserModel.findOne = jest
			.fn()
			.mockRejectedValueOnce(new Error("Test error"));

		// Act
		await ForgotPassword(req, res);

		// Expected Result
		expect(res.status).toHaveBeenCalledWith(500);
		expect(res.json).toHaveBeenCalledWith({
			count: 0,
			success: false,
			data: null,
			statusCode: 500,
			statusText: "Something error occured, please contact administrator!"
		});
	});
});
