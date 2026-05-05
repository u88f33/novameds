import { CronJob } from 'cron';

function generateDailySalesReport() {
    const job = new CronJob(
        '* * * * * *', // cronTime
        function () {
            console.log('You will see this message every second');
        }, // onTick
        null, // onComplete
        true, // start
        'Asia/Karachi' // timeZone
    );
}

export default generateDailySalesReport;