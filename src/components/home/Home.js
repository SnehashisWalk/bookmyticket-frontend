import { Carousel, Carousel2, Carousel3 } from "../carousel/Carousel";
import "./home.css";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { PageContext } from "../../context/PageContext";
import Modal from "../modal/Modal";
import { useContext, useState, useLayoutEffect } from "react";
import Footer from "../footer/Footer";
import Topbar from "../topbar/Topbar";
import SideMenuBar from "../side-menu-bar/SideMenuBar";

export default function Home() {
  const { pageState } = useContext(PageContext);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  
  const [width, height] = useWindowSize()

  if (pageState.sidebar) {
    return (
      <>
        {/* {pageState.sidebar ? "":  */}
        <Topbar />
        <SideMenuBar />
      </>
    );
  } else {
    return (
      <>
        {/* {pageState.sidebar ? "":  */}
        <Topbar />
        <section className="homeSection">
          <div className="homeSectionDiv">
            {width < 768 ? (
              ""
            ) : (
              <div className="contentHeader">
                <div className="contentHeaderLeft">
                  <ul className="contentHeaderList">
                    <li className="contentHeaderListItem">Movies</li>
                    <li className="contentHeaderListItem">Events</li>
                    <li className="contentHeaderListItem">Plays</li>
                    <li className="contentHeaderListItem">Sports</li>
                    <li className="contentHeaderListItem">Activities</li>
                    <li className="contentHeaderListItem">Buzz</li>
                  </ul>
                </div>
                <div className="contentHeaderRight">
                  <ul className="contentHeaderList">
                    <li className="contentHeaderListItem">ListYourShow</li>
                    <li className="contentHeaderListItem">Corporates</li>
                    <li className="contentHeaderListItem">Offers</li>
                    <li className="contentHeaderListItem">Gift Cards</li>
                  </ul>
                </div>
              </div>
            )}
            <Carousel />
          </div>
          {pageState.modalState.signinModal ? (
            <Modal type="signin" />
          ) : pageState.modalState.signupModal ? (
            <Modal type="signup" />
          ) : (
            ""
          )}
        </section>

        {pageState.modalState.signinModal ||
        pageState.modalState.signupModal ? (
          ""
        ) : (
          <>
            <section className="topMovieSection">
              <div className="topMovieWrapper">
                <div className="topMovieHeader">
                  <div className="topMovieHeaderLeft">
                    <PlayArrowIcon className="playBtn" />
                    <h3 className="playBtnTitle">TOP TRENDING MOVIES</h3>
                  </div>
                  <div className="topMovieHeaderRight">
                    <h3 className="rupayTitle">powered by</h3>
                    <img
                      className="rupayImg"
                      src="/assets/rupay-logo.svg"
                      alt="Rupay Logo"
                    />
                  </div>
                </div>
                <div className="movieListWrapper">
                  <Carousel2 />
                </div>
              </div>
            </section>
            <section className="upcomingMovieSection">
              <Carousel3 />
            </section>
            <section className="partners">
              <h1>Our Partners</h1>
              <div className="slider">
                <div className="slide">
                  <img
                    src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
                    alt=""
                  />
                  <img
                    src="https://1000logos.net/wp-content/uploads/2017/08/Domino%E2%80%99s-Logo.png"
                    alt=""
                  />
                  <img
                    src="https://1000logos.net/wp-content/uploads/2017/06/Subway-logo.png"
                    alt=""
                  />
                  <img
                    src="https://cdn.viacom18.com/stg/wp-content/uploads/2020/12/01130052/thumbnail.png"
                    alt=""
                  />
                  <img
                    src="https://1000logos.net/wp-content/uploads/2016/12/Starbucks-Logo.png"
                    alt=""
                  />
                  <img
                    src="https://1000logos.net/wp-content/uploads/2021/05/Haldiram-logo.png"
                    alt=""
                  />
                  <img
                    src="https://logodownload.org/wp-content/uploads/2020/02/zomato-logo-0.png"
                    alt=""
                  />
                  <img
                    src="http://www.pngimagesfree.com/LOGO/S/Swiggy/Swiggy-Logo-PNG.png"
                    alt=""
                  />
                </div>
                <div className="slide">
                  <img
                    src="https://getlogo.net/wp-content/uploads/2020/04/bookmyshow-logo-vector.png"
                    alt=""
                  />
                  <img
                    src="https://1000logos.net/wp-content/uploads/2017/08/Domino%E2%80%99s-Logo.png"
                    alt=""
                  />
                  <img
                    src="https://1000logos.net/wp-content/uploads/2017/06/Subway-logo.png"
                    alt=""
                  />
                  <img
                    src="https://cdn.viacom18.com/stg/wp-content/uploads/2020/12/01130052/thumbnail.png"
                    alt=""
                  />
                  <img
                    src="https://1000logos.net/wp-content/uploads/2016/12/Starbucks-Logo.png"
                    alt=""
                  />
                  <img
                    src="https://1000logos.net/wp-content/uploads/2021/05/Haldiram-logo.png"
                    alt=""
                  />
                  <img
                    src="https://logodownload.org/wp-content/uploads/2020/02/zomato-logo-0.png"
                    alt=""
                  />
                  <img
                    src="http://www.pngimagesfree.com/LOGO/S/Swiggy/Swiggy-Logo-PNG.png"
                    alt=""
                  />
                </div>
              </div>
            </section>
            <Footer />
          </>
        )}
      </>
    );
  }
}
