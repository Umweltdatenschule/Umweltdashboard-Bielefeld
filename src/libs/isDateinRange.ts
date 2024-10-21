export default function isDateInRange(
  date: Date,
  start: Date,
  end: Date,
  current?: Date
): boolean {
  if (!date || !start || !end) return false;

  const diffInMs = current ? Math.abs(current.getTime() - date.getTime()) : 0;
  const timeRange = Math.abs(end.getTime() - start.getTime());

  const minInterval = (() => {
    const times = {
      YEAR: 365 * 24 * 60 * 60 * 1000,
      MONTH: 30 * 24 * 60 * 60 * 1000,
      DAY: 24 * 60 * 60 * 1000,
    };
    if (timeRange >= times.YEAR) return times.YEAR;
    if (timeRange > times.MONTH) return times.MONTH;
    if (timeRange > times.DAY) return times.DAY;
    return 0;
  })();

  return (
    date.getTime() >= start.getTime() &&
    date.getTime() <= end.getTime() &&
    (!current || diffInMs >= minInterval)
  );
}
