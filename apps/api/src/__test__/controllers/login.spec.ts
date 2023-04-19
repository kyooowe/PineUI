//#region Import
import { Login } from "../../controller/authentication/login.controller";
import { Request } from "express";
import mongoose from "mongoose";
import CryptoJS from "crypto-js";
import { UserModel } from "../../models/user/user.models";
import { IUser } from "../../interface/user/user.interface";

import * as dotenv from "dotenv";
dotenv.config();
//#endregion

//#region Constant and Mock
const secretKey = process.env.TOKEN_KEY as string;

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

describe("Login", () => {
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
		const req = mockRequest;
		const res = mockResponse;

		// Mock mongoose function
		UserModel.findOne = jest.fn().mockResolvedValueOnce(null);

		// Act
		await Login(req, res);

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

	it("should return a 404 status code when password is incorrect", async () => {
		// Mock Response
		const req = {
			body: { email: mockUserValue.email, password: "wrongPassword" }
		} as Request;
		const res = mockResponse;

		mockUserValue.password = CryptoJS.AES.encrypt(
			"testpassword",
			secretKey
		).toString();

		// mock mongoose function
		UserModel.findOne = jest.fn().mockResolvedValueOnce(mockUserValue);

		// Run Component
		await Login(req, res);

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

	it("should return a token and a 200 status code when the user is found and the password is correct", async () => {
		// Mock Response
		const req = {
			body: { email: mockUserValue.email, password: "testpassword" }
		} as Request;
		const res = mockResponse;

		// Hash the mockValue Password
		mockUserValue.password = CryptoJS.AES.encrypt(
			"testpassword",
			`${secretKey}`
		).toString();

		// Mock mongoose function
		UserModel.findOne = jest.fn().mockResolvedValueOnce(mockUserValue);
		UserModel.findByIdAndUpdate = jest
			.fn()
			.mockResolvedValueOnce(mockUserValue);

		// Run Component
		await Login(req, res);

		// Expected Result
		expect(res.status).toHaveBeenCalledWith(200);
		expect(res.json).toHaveBeenCalledWith({
			count: 1,
			success: true,
			data: {
				token: expect.any(String),
				user: mockUserValue
			},
			statusCode: 200,
			statusText: "Success!"
		});
	});

	it("should return 500 if an error occurs", async () => {
		// Req and Res
		const req = mockRequest;
		const res = mockResponse;

		// mock mongoose function
		UserModel.findOne = jest
			.fn()
			.mockRejectedValueOnce(new Error("Test error"));

		// Run Component
		await Login(req, res);

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
