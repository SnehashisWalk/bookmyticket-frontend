import Topbar from "../../components/topbar/Topbar";
import "./booking.css";
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import { useContext, useState } from "react";
import Modal from "../../components/modal/Modal";
import Calendar from "../../components/calendar/Calendar";
import TimePicker from "../../components/time-picker/TimePicker";
import { PageContext } from "../../context/PageContext";
import { FaRupeeSign } from "react-icons/fa";
import { RAZORPAY_KEY } from "../../payment-details";
import { API } from "../../backend";
import axios from "axios";

const SEAT_ROW = ["", 0, 1, 2, 3, 4, 5, 6, 7];

let SEATS = [];

let SELECTED__SEATS = [];

for (let i = 0; i < 72; i++) {
  SEATS.push(i);
}

export default function Booking() {
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [warningLimit, setWarningLimit] = useState(false);
  const [selectedLang, setSelectedLang] = useState(null);

  const { pageState } = useContext(PageContext);

  const handleSelectedLang = (lang) => {
    if (selectedLang === lang) setSelectedLang(null);
    else setSelectedLang(lang);
  };

  const handleSelectedSeat = (seat) => {
    console.log(seat);
    if (
      selectedSeat.length > 4 &&
      SELECTED__SEATS.find((s) => s._id === seat)
    ) {
      SELECTED__SEATS = SELECTED__SEATS.filter((s) => s._id !== seat);
      setWarningLimit(false);
    } else if (selectedSeat.length > 4) {
      setWarningLimit(true);
      return;
    } else {
      if (SELECTED__SEATS.find((s) => s._id === seat)) {
        SELECTED__SEATS = SELECTED__SEATS.filter((s) => s._id !== seat);
      } else {
        let ticketNumber = "";
        ticketNumber += `${String.fromCharCode(65 + Math.floor(seat / 9))}${
          (seat % 9) - 1
        }`;
        SELECTED__SEATS.push({ _id: seat, ticketNumber });
      }
    }

    setSelectedSeat([...SELECTED__SEATS]);
    console.log(SELECTED__SEATS, selectedSeat.length);
  };

  const handleCloseModal = () => {
    setWarningLimit(false);
  };

  const warningModal = () => {
    console.log("modal");
    return (
      <div className="modalWrapper">
        <div className="warning-modal">
          <p className="modal-msg">You can select maximum 5 seats.</p>
          <Button className="modal-warning-btn" onClick={handleCloseModal}>
            {" "}
            OK{" "}
          </Button>
        </div>
      </div>
    );
  };

  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadRazorpayScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load!");
      return;
    }

    const orderResponse = await axios.post(API + "razorpay", {
      amount: SELECTED__SEATS.length * 50 * 100,
      currency: "INR",
    });

    console.log(orderResponse.data);

    const options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      amount: orderResponse.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: orderResponse.data.currency,
      name: "BookMyTicket",
      description: "Test Transaction",
      image: pageState.selectedMovie.poster,
      order_id: orderResponse.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: pageState.user.userName,
        email: pageState.user.email,
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      {warningLimit ? warningModal() : ""}
      <Topbar />
      <div className="booking-wrapper">
        <div className="booking-left">
          <div className="booking-left-header">
            <div className="booking-lang-btn-container">
              <Button
                className={`${
                  selectedLang === "English" ? "lang-pri-btn" : "lang-sec-btn"
                }`}
                onClick={() => handleSelectedLang("English")}
              >
                English
              </Button>
              <Button
                className={`${
                  selectedLang === "Hindi" ? "lang-pri-btn" : "lang-sec-btn"
                }`}
                onClick={() => handleSelectedLang("Hindi")}
              >
                Hindi
              </Button>
              <Button
                className={`${
                  selectedLang === "Odia" ? "lang-pri-btn" : "lang-sec-btn"
                }`}
                onClick={() => handleSelectedLang("Odia")}
              >
                Odia
              </Button>
              <Button
                className={`${
                  selectedLang === "Tamil" ? "lang-pri-btn" : "lang-sec-btn"
                }`}
                onClick={() => handleSelectedLang("Tamil")}
              >
                Tamil
              </Button>
            </div>
            <div className="booking-calendar-container">
              <div className="booking-calendar-container-row">
                <strong>Select a date:</strong> <Calendar />
              </div>
              <div className="booking-calendar-container-row">
                <strong>Select a time:</strong> <TimePicker />
              </div>
            </div>
          </div>
          <div className="screen-area">
            <p>Screen This Side</p>
          </div>
          <div className="booking-left-content-container">
            {SEAT_ROW.map((row, i) => {
              if (row === -1) return;
              return (
                <div className="booking-left-content-item" key={i}>
                  <strong>{row}</strong>
                </div>
              );
            })}
            {SEATS.map((seat, i) => {
              if (i % 9 === 0)
                return (
                  <div className="booking-left-content-item" key={i}>
                    <strong>{String.fromCharCode(65 + i / 9)}</strong>
                  </div>
                );
              else
                return (
                  <div
                    className={`booking-left-content-item seat ${
                      selectedSeat.find((s) => s._id === i)
                        ? "selectedSeat"
                        : ""
                    }`}
                    key={i}
                    onClick={() => {
                      handleSelectedSeat(i);
                    }}
                  >
                    <EventSeatIcon />
                  </div>
                );
            })}
          </div>
        </div>
        <div className="booking-right">
          <div className="booking-right-header">
            <h3>Book Tickets</h3>
          </div>
          <div className="booking-info-container">
            <div className="booking-img-container">
              <img
                src={pageState.selectedMovie.poster}
                alt={pageState.selectedMovie.name}
              />
            </div>
            <div className="booking-info">
              <h4 className="booking-info-item">
                {pageState.selectedMovie.name}
              </h4>
              <p className="booking-info-item">
                <strong>
                  {`Duration: ${pageState.selectedMovie.duration}`}
                </strong>
              </p>
              <p>
                <strong>Hall: Keshari Talkies, Bhubaneswar.</strong>
              </p>
              <p>
                <strong>Seats</strong>:{" "}
                {SELECTED__SEATS.length === 0 ? (
                  <strong style={{ color: "red" }}>Please select seats.</strong>
                ) : (
                  <strong>
                    {SELECTED__SEATS.map((seat) => seat.ticketNumber + " ")}
                  </strong>
                )}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {pageState.selectedDate === null ? (
                  <strong style={{ color: "red" }}>
                    Please select a date.
                  </strong>
                ) : (
                  <strong>{pageState.selectedDate.dateString}</strong>
                )}
              </p>
              <p>
                <strong>Time Slot:</strong>{" "}
                {pageState.selectedTimeSlot === null ? (
                  <strong style={{ color: "red" }}>
                    Please select a time slot.
                  </strong>
                ) : (
                  <strong>{pageState.selectedTimeSlot}</strong>
                )}
              </p>
            </div>
          </div>
          <div className="payment-info-container">
            <div className="payment-info">
              <h3
                style={{
                  textAlign: "center",
                  margin: "0",
                  letterSpacing: "1px",
                }}
              >
                Price Details
              </h3>
              <div style={{ width: "90%", margin: "20px" }}>
                <div style={{ display: "flex", marginBottom: "5px" }}>
                  <div style={{ flex: "6" }}>
                    <strong>Seats x {SELECTED__SEATS.length}</strong>
                  </div>
                  <div style={{ flex: "6" }}>
                    <strong>
                      <FaRupeeSign /> {SELECTED__SEATS.length * 50}
                    </strong>
                  </div>
                </div>
                <div style={{ display: "flex", marginBottom: "20px" }}>
                  <div style={{ flex: "6" }}>
                    <strong>Language</strong>
                  </div>
                  <div style={{ flex: "6" }}>
                    {selectedLang === null ? (
                      <strong style={{ color: "red" }}>
                        Please select a language.
                      </strong>
                    ) : (
                      <strong>{selectedLang}</strong>
                    )}
                  </div>
                </div>
                <hr />
                <div style={{ display: "flex", marginTop: "5px" }}>
                  <div style={{ flex: "6" }}>
                    <strong>Total</strong>
                  </div>
                  <div
                    style={{
                      flex: "6",
                    }}
                  >
                    <strong>
                      <FaRupeeSign /> {SELECTED__SEATS.length * 50}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-btn-container">
              <Button className="payment-btn" onClick={displayRazorpay}>
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
