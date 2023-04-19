//#region Import
import { Connect } from "../../config/mongoose.config";
import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();
//#endregion

// Define a mock implementation for the mongoose.connect function
jest.mock("mongoose", () => ({
	connect: jest.fn(),
	connection: {
		on: jest.fn()
	}
}));

describe("Connect function", () => {
	it("should connect to MongoDB", async () => {
		// Mock console
		jest.spyOn(console, "log");

		// Call the Connect function
		await Connect();

		// Expect the mongoose.connect function to be called with the correct arguments
		expect(mongoose.connect).toHaveBeenCalledWith(
			`${process.env.MONGO_DB}${process.env.MONGO_DB_SCHEMA}`,
			{
				useNewUrlParser: true,
				useUnifiedTopology: true,
				keepAlive: true
			}
		);

		// Expect the console log to be called with the correct message
		expect(console.log).toHaveBeenCalledWith(
			`⚡️[dtbase]: MongoDB Connected at ${process.env.MONGO_DB_SCHEMA}`
		);
	});

	it("should handle errors", async () => {
		// Mock console
		jest.spyOn(console, "log");

		// Mock the mongoose.connect function to throw an error
		mongoose.connect = jest.fn().mockRejectedValueOnce(null);

		// Call the Connect function
		await Connect();

		// Expect the console log to be called with the correct error message
		expect(console.log).toBeCalledWith(
			"⚡️[dtbase]: MongoDB Connected at test"
		);
		expect(console.log).toHaveBeenCalledWith(
			"Failed to connect to MongoDB",
			null
		);
	});
});
