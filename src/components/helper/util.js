export function formattedStringDate(inputDate) {
  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const date = new Date(inputDate);

  return `${date.getDate()} ${
    MONTHS[date.getMonth()]
  }, ${date.getFullYear()} | ${DAYS[date.getDay()]}`;
}


