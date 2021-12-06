import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  const [profileNav, setProfileNav] = useState(0);

  const handleProfile = () => {
    setProfileNav(0);
  };
  const handleBookings = () => {
    setProfileNav(1);
  };

  const BOOKINGS = [
    {
      _id: 1,
      name: "John Wick: Chapter 3 - Parabellum",
      img: "https://www.joblo.com/assets/images/joblo/posters/2019/03/john_wick_chapter_three_ver4_xlg.jpg",
      theatre__name: "INOX Bhubaneswar",
      date: "06/26/2021",
      time: "9:30 am",
      seat: "F23",
      price: "90",
      order__status: "Paid",
    },
    {
      _id: 2,
      name: "John Wick: Chapter 3 - Parabellum",
      img: "https://www.joblo.com/assets/images/joblo/posters/2019/03/john_wick_chapter_three_ver4_xlg.jpg",
      theatre__name: "INOX Bhubaneswar",
      date: "06/26/2020",
      time: "9:30 am",
      seat: "F23",
      price: "90",
      order__status: "Paid",
    },
  ];

  const MONTHS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const WEEK__DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <>
      <Topbar />
      <div className="profile-wrapper">
        <div className="profile-nav">
          <ul className="profile-nav-options">
            <li onClick={handleProfile}>My Profile</li>
            <li onClick={handleBookings}>My Bookings</li>
          </ul>
        </div>
        <div className="profile-content-area">
          <div className="profile-content-wrapper">
            {profileNav === 0 ? (
              <>
                <div className="profile-content-header">
                  <h2>Profile</h2>
                </div>
                <div className="profile-content">
                  <div className="profile-content-row">
                    <h3>Name:</h3>
                    <h3>John</h3>
                  </div>
                  <div className="profile-content-row">
                    <h3>Email Address:</h3>
                    <h3>john@gmail.com</h3>
                  </div>
                  <div className="profile-content-row">
                    <h3>Mobile Number:</h3>
                    <h3>0123456789</h3>
                  </div>
                </div>
                <div className="profile-content-footer"></div>
              </>
            ) : profileNav === 1 ? (
              <>
                <div className="profile-content-header">
                  <h2>Bookings</h2>
                </div>
                <div className="booking-content">
                  {BOOKINGS.map((booking) => {
                    let date__string = `${booking.date.split("/")[1]} ${
                      MONTHS[booking.date.split("/")[0] - 1]
                    }, ${booking.date.split("/")[2]}`;
                    let ticket__status =
                      new Date(booking.date) < new Date() ? "Expired" : "";
                    return (
                      <div
                        className={`booked-item ${
                          ticket__status === "Expired" ? "expired" : ""
                        }`}
                        key={booking._id}
                      >
                        <div className="booked-item-image">
                          <img src={booking.img} />
                        </div>
                        <div className="booked-item-info">
                          <div className="booked-item-title">
                            {booking.name}
                          </div>
                          <div className="booked-item-title">
                            {booking.theatre__name}
                          </div>
                          <div className="booked-item-title">
                            {date__string} |{" "}
                            {WEEK__DAYS[new Date(booking.date).getDay()]} |{" "}
                            {ticket__status}
                          </div>
                          <div className="booked-item-title">
                            {BOOKINGS[0].time}
                          </div>
                          <div className="booked-item-title">
                            Rs {booking.price} | {booking.order__status}
                          </div>
                        </div>
                        <div className="booked-item-seat">{booking.seat}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="profile-content-footer"></div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
