import { useContext } from "react";
import { PageContext } from "../../context/PageContext";
import "./calendar.css";

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

export default function Calendar() {
  const getDateFormatted = (date) => {
    const yyyy = date.getFullYear().toString();
    const mm =
      Math.floor(date.getMonth() / 10) === 0
        ? `0${date.getMonth() + 1}`
        : (date.getMonth() + 1).toString();
    const dd =
      Math.floor(date.getDate() / 10) === 0
        ? `0${date.getDate()}`
        : date.getDate().toString();
    return `${yyyy}-${mm}-${dd}`;
  };

  const date = new Date();
  const date2 = new Date();
  date2.setDate(date2.getDate() + 7);

  const minDate = getDateFormatted(date);
  const maxDate = getDateFormatted(date2);

  console.log(maxDate);

  const { dispatch } = useContext(PageContext);

  const handleChange = (e) => {
    const date = new Date(e.target.value);

    const dateString = `${date.getDate()} ${
      MONTHS[date.getMonth()]
    }, ${date.getFullYear()} | ${DAYS[date.getDay()]}`;

    dispatch({
      type: "SELECTED__DATE",
      payload: {
        date,
        dateString,
      },
    });
  };

  return (
    <div>
      <input type="date" min={minDate} onChange={handleChange} max={maxDate} />
    </div>
  );
}
