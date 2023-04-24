//#region Import
import { CronJob } from "cron";
//#endregion

const CronConfig = () => {

	// Create cron job schedule
	// the * * * * * * runs every second
	const cronStart = () => {
		const job = new CronJob("* * * * * *", async () => {
			fooFunction();
		});

		job.start();
	};

	const fooFunction = async () => {
		console.log("im running every second");
	};

	return { cronStart };
};

export default CronConfig;
