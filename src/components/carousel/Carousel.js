import { Button } from "@material-ui/core";
import { useContext, useState, useEffect } from "react";
import "./carousel.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { upcomingMovieData } from "../helper/upcomingMovieData";
import { Link } from "react-router-dom";
import { PageContext } from "../../context/PageContext";
import { useLayoutEffect } from "react";
import { carouselTwoImages } from "./constants";

let iterator = [1, 2, 3, 4, 5];

/*********** CAROUSEL ITEM 1 *****************/

export function Carousel() {
  const [counter, setCounter] = useState({
    id1: 1,
    id2: 2,
    id3: 3,
    id4: 4,
    id5: 5,
  });

  const handlePrev = () => {
    iterator.forEach((e, i) => {
      if (iterator[i] === 5) iterator[i] = 1;
      else iterator[i] += 1;
    });
    setCounter({
      id1: iterator[0],
      id2: iterator[1],
      id3: iterator[2],
      id4: iterator[3],
      id5: iterator[4],
    });
    console.log(counter);
  };
  const handleNext = () => {
    iterator.forEach((e, i) => {
      if (iterator[i] === 1) iterator[i] = 5;
      else iterator[i] -= 1;
    });
    setCounter({
      id1: iterator[0],
      id2: iterator[1],
      id3: iterator[2],
      id4: iterator[3],
      id5: iterator[4],
    });
  };

  return (
    <div className="gallery">
      <div className="gallery-container">
        <img
          className={`gallery-item gallery-item-${counter.id1}`}
          src="https://i1.wp.com/www.3ghackerz.com/wp-content/uploads/2017/10/bookmyshow-loot-offer.jpg?ssl=1"
          data-index="1"
          alt="carousel-item"
        />
        <img
          className={`gallery-item gallery-item-${counter.id2}`}
          src="https://i.pinimg.com/originals/66/3a/8d/663a8ddd2fb30cf5fe09ec48e037a82c.jpg"
          data-index="2"
          alt="carousel-item"
        />
        <img
          className={`gallery-item gallery-item-${counter.id3}`}
          src="https://nlk.bmscdn.com/showcaseimage/eventimage/nobody-16-07-2021-03-46-02-911.jpg"
          data-index="3"
          alt="carousel-item"
        />
        <img
          className={`gallery-item gallery-item-${counter.id4}`}
          src="https://ae.bmscdn.com/showcaseimage/eventimage/jungle-cruise-09-08-2021-05-01-44-350.jpg"
          data-index="4"
          alt="carousel-item"
        />
        <img
          className={`gallery-item gallery-item-${counter.id5}`}
          src="https://in.bmscdn.com/showcaseimage/eventimage/dolittle-13-01-2020-12-06-21-806.jpg"
          data-index="5"
          alt="carousel-item"
        />
      </div>
      <div className="gallery-controls">
        <Button className="prevBtn" onClick={handlePrev}>
          <ChevronLeftIcon />
        </Button>
        <Button className="nextBtn" onClick={handleNext}>
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}

/*********************************************/

/*********** CAROUSEL ITEM 2 *****************/

let iterator1 = [1, 2, 3, 4, 5, 0, 0, 0, 0, 0];
export function Carousel2() {
  const [counter, setCounter] = useState({
    id1: 1,
    id2: 2,
    id3: 3,
    id4: 4,
    id5: 5,
    id6: 0,
    id7: 0,
    id8: 0,
    id9: 0,
    id10: 0,
  });
  const [controlCount, setControlCount] = useState(0);

  const handlePrev = () => {
    switch (iterator1.indexOf(5)) {
      case 5:
        iterator1 = [1, 2, 3, 4, 5, 0, 0, 0, 0, 0];
        setControlCount((controlCount) => controlCount - 1);
        break;
      case 6:
        iterator1 = [0, 1, 2, 3, 4, 5, 0, 0, 0, 0];
        setControlCount((controlCount) => controlCount - 1);
        break;
      case 7:
        iterator1 = [0, 0, 1, 2, 3, 4, 5, 0, 0, 0];
        setControlCount((controlCount) => controlCount - 1);
        break;
      case 8:
        iterator1 = [0, 0, 0, 1, 2, 3, 4, 5, 0, 0];
        setControlCount((controlCount) => controlCount - 1);
        break;
      case 9:
        iterator1 = [0, 0, 0, 0, 1, 2, 3, 4, 5, 0];
        setControlCount((controlCount) => controlCount - 1);
        break;
      default:
        break;
    }
    let myctr = {
      id1: iterator1[0],
      id2: iterator1[1],
      id3: iterator1[2],
      id4: iterator1[3],
      id5: iterator1[4],
      id6: iterator1[5],
      id7: iterator1[6],
      id8: iterator1[7],
      id9: iterator1[8],
      id10: iterator1[9],
    };
    setCounter((prev) => myctr);
  };

  const handleNext = () => {
    switch (iterator1.indexOf(1)) {
      case 0:
        iterator1 = [0, 1, 2, 3, 4, 5, 0, 0, 0, 0];
        setControlCount((controlCount) => controlCount + 1);
        break;
      case 1:
        iterator1 = [0, 0, 1, 2, 3, 4, 5, 0, 0, 0];
        setControlCount((controlCount) => controlCount + 1);
        break;
      case 2:
        iterator1 = [0, 0, 0, 1, 2, 3, 4, 5, 0, 0];
        setControlCount((controlCount) => controlCount + 1);
        break;
      case 3:
        iterator1 = [0, 0, 0, 0, 1, 2, 3, 4, 5, 0];
        setControlCount((controlCount) => controlCount + 1);
        break;
      case 4:
        iterator1 = [0, 0, 0, 0, 0, 1, 2, 3, 4, 5];
        setControlCount((controlCount) => controlCount + 1);
        break;
      default:
        break;
    }
    let myctr = {
      id1: iterator1[0],
      id2: iterator1[1],
      id3: iterator1[2],
      id4: iterator1[3],
      id5: iterator1[4],
      id6: iterator1[5],
      id7: iterator1[6],
      id8: iterator1[7],
      id9: iterator1[8],
      id10: iterator1[9],
    };
    setCounter((prev) => myctr);
  };
  return (
    <div className="carousel2">
      <div className="carousel2-container">
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id1}`}
          src="https://www.joblo.com/wp-content/uploads/2019/08/nineteen_seventeen_poster-1.jpg"
          alt="1917"
        />
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id2}`}
          src="https://www.joblo.com/wp-content/uploads/2019/08/underwater-poster-xl-1.jpg"
          alt="underwater"
        />
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id3}`}
          src="https://www.joblo.com/wp-content/uploads/2021/03/Zack-Snyder-Justice-League-Poster-Key-Art-1.jpg"
          alt="Justice League"
        />
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id4}`}
          src="https://www.joblo.com/wp-content/uploads/2021/03/wrath-of-man-guy-ritchie-action-thriller-1.jpg"
          alt="Wrath of Man"
        />
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id5}`}
          src="https://www.joblo.com/wp-content/uploads/2021/03/THE-COURIER-Poster-scaled-2.jpg"
          alt="The Courier"
        />
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id6}`}
          src="https://www.joblo.com/wp-content/uploads/2021/04/thunder-force-netflix-151308-1.jpg"
          alt="Thunder Force"
        />
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id7}`}
          src="https://www.joblo.com/wp-content/uploads/2021/04/luca-disney-pixar-trailer-poster-2021-1.jpg"
          alt="Luca"
        />
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id8}`}
          src="https://www.joblo.com/wp-content/uploads/2020/11/boss_baby_family_business_xlg-1.jpg"
          alt="Boss Baby"
        />
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id9}`}
          src="https://www.joblo.com/wp-content/uploads/2021/06/rsz_tomorrow-war-1.jpg"
          alt="The Tomorrow War"
        />
        <img
          className={`carousel2-item carousel2-item-vis-${counter.id10}`}
          src="https://www.joblo.com/wp-content/uploads/2021/06/misfits-poster-1.jpg"
          alt="The Misfits"
        />
      </div>
      <div className="carousel2-controls">
        <Button className="prevBtn2" onClick={handlePrev}>
          <ChevronLeftIcon />
        </Button>
        <Button className="nextBtn2" onClick={handleNext}>
          <ChevronRightIcon />
        </Button>
      </div>
    </div>
  );
}

let iterator3 = [1, 2, 3, 4, 5, 6];

export function Carousel3() {
  const [activeUpcomingmMovie, setActiveUpcomingmMovie] = useState(
    upcomingMovieData[0]
  );
  const [imgItems, setImgItems] = useState({
    id1: 1,
    id2: 2,
    id3: 3,
    id4: 4,
    id5: 5,
    id6: 6,
  });
  const handlePrev = () => {
    iterator3.forEach((e, i) => {
      if (iterator3[i] === 6) iterator3[i] = 1;
      else iterator3[i] += 1;
    });
    setImgItems({
      id1: iterator3[0],
      id2: iterator3[1],
      id3: iterator3[2],
      id4: iterator3[3],
      id5: iterator3[4],
      id6: iterator3[5],
    });
    setActiveUpcomingmMovie(upcomingMovieData[iterator3.indexOf(1)]);
  };
  const handleNext = () => {
    iterator3.forEach((e, i) => {
      if (iterator3[i] === 1) iterator3[i] = 6;
      else iterator3[i] -= 1;
    });
    setImgItems({
      id1: iterator3[0],
      id2: iterator3[1],
      id3: iterator3[2],
      id4: iterator3[3],
      id5: iterator3[4],
      id6: iterator3[5],
    });
    setActiveUpcomingmMovie(upcomingMovieData[iterator3.indexOf(1)]);
  };

  const { pageState, dispatch } = useContext(PageContext);

  const handleSelectedMovieClick = (selectedMovie) => {
    dispatch({
      type: "CURRENTMOVIENAV",
      payload: selectedMovie,
    });
    dispatch({
      type: "UPDATE_LOCALSTORAGE_PAGESTATE",
      payload: pageState,
    });
  };

  console.log(upcomingMovieData);

  return (
    <div className="carousel3Wrapper">
      <div className="carousel3-left">
        <div className="carousel3">
          <div className="carousel3-vertical-header">
            <h1 className="carousel3-vertical-header-title">
              TOP UPCOMING MOVIES
            </h1>
          </div>
          <div className="carousel3-container">
            <img
              className={`carousel3-item carousel3-item-${imgItems.id1}`}
              src={upcomingMovieData[0].movie_poster}
              alt="movie"
            />
            <img
              className={`carousel3-item carousel3-item-${imgItems.id2}`}
              src={upcomingMovieData[1].movie_poster}
              alt="movie"
            />
            <img
              className={`carousel3-item carousel3-item-${imgItems.id3}`}
              src={upcomingMovieData[2].movie_poster}
              alt="movie"
            />
            <img
              className={`carousel3-item carousel3-item-${imgItems.id4}`}
              src={upcomingMovieData[3].movie_poster}
              alt="movie"
            />
            <img
              className={`carousel3-item carousel3-item-${imgItems.id5}`}
              src={upcomingMovieData[4].movie_poster}
              alt="movie"
            />
            <img
              className={`carousel3-item carousel3-item-${imgItems.id6}`}
              src={upcomingMovieData[5].movie_poster}
              alt="movie"
            />
            <Button className="prevBtn3" onClick={handlePrev}>
              <KeyboardArrowUpIcon />
            </Button>
            <Button className="nextBtn3" onClick={handleNext}>
              <KeyboardArrowDownIcon />
            </Button>
          </div>
          <div className="carousel3-indicator">
            <FiberManualRecordIcon
              className={`indicator-btn ${
                imgItems.id1 === 1 ? "active-indicator-btn" : ""
              }`}
            />
            <FiberManualRecordIcon
              className={`indicator-btn ${
                imgItems.id2 === 1 ? "active-indicator-btn" : ""
              }`}
            />
            <FiberManualRecordIcon
              className={`indicator-btn ${
                imgItems.id3 === 1 ? "active-indicator-btn" : ""
              }`}
            />
            <FiberManualRecordIcon
              className={`indicator-btn ${
                imgItems.id4 === 1 ? "active-indicator-btn" : ""
              }`}
            />
            <FiberManualRecordIcon
              className={`indicator-btn ${
                imgItems.id5 === 1 ? "active-indicator-btn" : ""
              }`}
            />
            <FiberManualRecordIcon
              className={`indicator-btn ${
                imgItems.id6 === 1 ? "active-indicator-btn" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div className="carousel3-right">
        <div className="carousel3-content-header">
          <Link to={`/${activeUpcomingmMovie.movie_name}`}>
            <h1 className="carousel3-content-header-title">
              {activeUpcomingmMovie.movie_name} (2021)
            </h1>

            <img
              className={`carousel3-content-header-img`}
              src={activeUpcomingmMovie.movie_images[0]}
              onClick={() => {
                handleSelectedMovieClick(activeUpcomingmMovie.movie_name);
              }}
            />

            <img
              className={`carousel3-content-banner-img`}
              src={activeUpcomingmMovie.movie_banners[0]}
            />
          </Link>
        </div>
        <div className="carousel3-content">
          <h4 className="carosuel3-content-title">
            {activeUpcomingmMovie.release_status} |{" "}
            {activeUpcomingmMovie.release_status === "Released"
              ? ""
              : "Releases "}
            {activeUpcomingmMovie.release_date},{" "}
            {activeUpcomingmMovie.release_year}
          </h4>
          <hr className="carousel3-content-hr" />
          <p className="carosuel3-content-desc">
            {activeUpcomingmMovie.movie_desc}
          </p>

          <p className="carousel3-content-director">
            <strong>Director:</strong> {activeUpcomingmMovie.director}
          </p>
          <p className="carousel3-content-writers">
            <strong>Writers:</strong>{" "}
            {activeUpcomingmMovie.writers.map((w) => w + ", ")}{" "}
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              4 more credits...
            </a>
          </p>
          <p className="carousel3-content-stars">
            <strong>Stars:</strong>
          </p>
          <div className="carousel3-star-container">
            <div className="carousel3-star-container-item">
              <img
                src={activeUpcomingmMovie.stars[0].star_img}
                alt=""
                className="carousel3-star-img-1"
              />
              <p className="carousel3-star-name">
                {activeUpcomingmMovie.stars[0].star_name}
              </p>
            </div>
            <div className="carousel3-star-container-item">
              <img
                src={activeUpcomingmMovie.stars[1].star_img}
                alt=""
                className="carousel3-star-img-2"
              />
              <p className="carousel3-star-name">
                {activeUpcomingmMovie.stars[1].star_name}
              </p>
            </div>
            <div className="carousel3-star-container-item">
              <img
                src={activeUpcomingmMovie.stars[2].star_img}
                alt=""
                className="carousel3-star-img-3"
              />
              <p className="carousel3-star-name">
                {activeUpcomingmMovie.stars[2].star_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
