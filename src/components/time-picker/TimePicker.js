import { useContext, useState } from "react";
import { PageContext } from "../../context/PageContext";
import "./timepicker.css";

export default function TimePicker() {
  const { pageState, dispatch } = useContext(PageContext);

  const handleChange = (e) => {
    dispatch({
      type: "SELECTED__TIME__SLOT",
      payload: e.target.value,
    });
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="none" selected disabled hidden>
          Select an Option
        </option>
        <option value="Morning | 9:30 am">Morning | 9:30 am</option>
        <option value="Afternoon | 12:00 pm">Afternoon | 12:00 pm</option>
        <option value="Evening | 5:00pm">Evening | 5:00pm</option>
        <option value="Night | 9:00 pm">Night | 9:00 pm</option>
      </select>
    </div>
  );
}
