export default function parseDate(dateString: string) {
  const clearData = dateString.replace(/'/g, "");
  const [datePart, timePart] = clearData.split(" ");
  const [day, month, year] = datePart.split(".").map(Number);
  const [hours, minutes] = timePart.split(":").map(Number);
  return new Date(year, month - 1, day, hours, minutes);
}
