import cron from 'node-cron';
import { selectWinnerForMonth } from '../services/winner.service.js';

cron.schedule(
  '59 23 28-31 * *',
  async () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);

    if (tomorrow.getMonth() !== now.getMonth()) {
      const year = now.getFullYear();
      const month = now.getMonth();

      console.log(`Running end-of-month winner selection for ${year}-${month + 1}`);

      try {
        const winner = await selectWinnerForMonth(year, month);

        if (!winner) {
          console.log('No eligible ideas to select.');
        } else {
          console.log('Winner selected:', winner._id.toString());
        }
      } catch (error) {
        console.error(`Error occurred while selecting monthly winner for ${year}-${month + 1}:`, error);
      }
    }
  },
  { timezone: 'Asia/Kolkata' },
);
