export const pickRandomPeriod = () => {
  const periods = ['daily', 'weekly', 'monthly'];
  const randomIndex = Math.floor(Math.random() * periods.length);
  return periods[randomIndex];
};
