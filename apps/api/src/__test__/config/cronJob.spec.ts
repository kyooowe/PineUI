//#region Import
import CronConfig from "../../config/cron.config";

const { cronStart } = CronConfig();
//#endregion

describe("Test the CronConfig function", () => {
	test("It should start a CronJob that runs fooFunction every second", async () => {
		// Mock console
		jest.spyOn(console, "log");

		// use Jest's fake timers to control time
		jest.useFakeTimers();

		cronStart();

		// advance time by 1 second
		jest.advanceTimersByTime(1000);

		// expect that fooFunction is called
		expect(console.log).toHaveBeenCalledWith("im running every second");
	});
});
