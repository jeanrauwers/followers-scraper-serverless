import cron from 'node-cron';
import { taskRunner } from './scraper';

cron.schedule(`* * * * *`, () => {
	console.log(`⏲️ RUNNING THE TASK`);
	taskRunner();
});
