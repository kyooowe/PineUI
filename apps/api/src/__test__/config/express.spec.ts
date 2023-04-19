//#region Import
import App from "../../config/express.config";
import request from "supertest";
import dotenv from "dotenv";

dotenv.config();

//#endregion

describe("App", () => {
	beforeAll(() => {
		App.listen(process.env.PORT, () => {
			console.log(
				`⚡️[server]: Server is running at http://localhost:${process.env.PORT}`
			);
		});
	});

	it("should respond with status 200", async () => {
		// Get response
		const response = await request(App).get("/");

		// Expect
		expect(response.statusCode).toBe(200);
		expect(response.text).toBe("Hello");
	});
});
