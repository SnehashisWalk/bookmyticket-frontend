import { Button, CircularProgress } from "@material-ui/core";
import { useContext, useRef } from "react";
import "./modal.css";
import { PageContext } from "../../context/PageContext";
import { signinCall, updateLocalStoragePageState } from "../../apiCalls";
import CloseIcon from "@material-ui/icons/Close";

export default function Modal({ type }) {
  console.log(type);
  const { pageState, dispatch } = useContext(PageContext);
  const email = useRef();
  const password = useRef();
  const handleClose = () => {
    if (type === "signin") {
      dispatch({
        type: "SIGNINMODAL",
      });
    } else {
      dispatch({
        type: "SIGNUPMODAL",
      });
    }
  };
  const handleSignin = async (event) => {
    event.preventDefault();
    await signinCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    // updateLocalStoragePageState(pageState);
  };

  if (type === "signin") {
    return (
      <div className="modalWrapper">
        <div className="modal">
          <div className="modalLeft">
            <p className="modalLeft-title">BookMyTicket</p>
          </div>
          <div className="modalRight">
            <h4
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#0575e6",
              }}
            >
              Sign in
            </h4>
            <form id="signin-form" onSubmit={handleSignin}>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="modalInput"
                required
                ref={email}
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="modalInput"
                required
                ref={password}
              ></input>
            </form>
            <Button
              type="submit"
              form="signin-form"
              style={{
                marginTop: "20px",
                backgroundColor: "#0575e6",
                color: "white",
                padding: "5px 20px",
                letterSpacing: "2px",
              }}
            >
              {pageState.isFetching ? (
                <CircularProgress style={{ color: "white" }} size="20px" />
              ) : (
                "Sign in"
              )}
            </Button>
          </div>
          <h4 className="closeButton" onClick={handleClose}>
            <CloseIcon />
          </h4>
        </div>
      </div>
    );
  } else if (type === "signup") {
    return (
      <div className="modalWrapper">
        <div className="modal">
          <div className="modalLeft">
            <p className="modalLeft-title">BookMyTicket</p>
          </div>
          <div className="modalRight">
            <h4
              style={{
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#0575e6",
              }}
            >
              Sign up
            </h4>
            <form id="signin-form">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="modalInput"
                required
              />
              <input
                type="tel"
                id="phoneno"
                name="phoneno"
                placeholder="Phone Number"
                className="modalInput"
                pattern="[0-9]{10}"
                maxLength="10"
                required
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="modalInput"
                required
              ></input>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Confirm Password"
                className="modalInput"
                required
              ></input>
            </form>
            <Button
              type="submit"
              form="signin-form"
              style={{
                marginTop: "20px",
                backgroundColor: "#0575e6",
                color: "white",
                padding: "5px 20px",
                letterSpacing: "2px",
              }}
            >
              Sign up
            </Button>
          </div>
          <h4 className="closeButton" onClick={handleClose}>
            <CloseIcon />
          </h4>
        </div>
      </div>
    );
  }
}
