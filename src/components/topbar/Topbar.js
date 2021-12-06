import { Button } from "@material-ui/core";
import "./topbar.css";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "../modal/Modal";
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import { useContext, useState } from "react";
import { PageContext } from "../../context/PageContext";
import { Link, Redirect } from "react-router-dom";
import { signout } from "../../apiCalls";

export default function Topbar() {
  const { pageState, dispatch } = useContext(PageContext);

  const handleSignup = () => {
    dispatch({
      type: "SIGNUPMODAL",
    });
  };
  const handleSignin = () => {
    dispatch({
      type: "SIGNINMODAL",
    });
  };

  const handleSignout = () => {
    dispatch({
      type: "LOGOUT",
    });
    signout();
    <Redirect to="/" />;
  };

  const handleSidebarClick = () => {
    dispatch({
      type: "SIDEBAR",
    })
  }

  return (
    <>
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h3 className="logo">BookMyTicket</h3>
          </Link>
        </div>
        <div className="topbarCenter">
          <input
            className="searchInput"
            type="text"
            placeholder={`Search for Movies`}
          />
        </div>
        <div className="topbarRight">
          {pageState.user ? (
            <>
              <Link to={`/profile`} style={{ textDecoration: "none" }}>
                <Button className="sec-btn">
                  {pageState.user.userName.split(" ")[0]}
                </Button>
              </Link>

              <Button className="pri-btn" onClick={handleSignout}>
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Button className="sec-btn" onClick={handleSignin}>
                Sign in
              </Button>
              <Button className="pri-btn" onClick={handleSignup}>
                Sign up
              </Button>
            </>
          )}
        </div>
      </div>
      <div className="topbarWrapper768">
        <div className="topbarLeft768">
          {pageState.sidebar ? <Close onClick={handleSidebarClick} /> : <MenuIcon onClick={handleSidebarClick} />}
        </div>
        <div className="topbarCenter768">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <h3 className="logo">BookMyTicket</h3>
          </Link>
        </div>
        <div className="topbarRight768">
          <input
            className="searchInput"
            type="text"
            placeholder={`Search for Movies`}
          />
        </div>
      </div>
    </>
  );
}
