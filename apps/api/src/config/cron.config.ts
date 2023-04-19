//#region Import
import { CronJob } from "cron";
//#endregion

const CronConfig = () => {
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
