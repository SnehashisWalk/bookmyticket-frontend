import { Button } from "@material-ui/core";
import Topbar from "../../components/topbar/Topbar";
import "./movie.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getSpecificMovie } from "../../apiCalls";
import { PageContext } from "../../context/PageContext";
import axios from "axios";
import { formattedStringDate } from "../../components/helper/util";

export default function Movie() {
  const { dispatch, pageState } = useContext(PageContext);

  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      const res = await axios.post(
        `http://localhost:8800/api/movie/getSpecificMovie`,
        { name: `${pageState.currentMovieNav}` }
      );
      console.log(new Date(res.data[0].release_date).getFullYear());
      setMovieData(res.data[0]);
    };
    fetchMovieData();
  }, []);

  const handleSelectedMovie = () => {
    dispatch({
      type: "SELECTED__MOVIE",
      payload: movieData,
    });
  };

  const OTHER__MOVIES = [
    {
      _id: 1,
      img_src:
        "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/b3ff70b27d262cff068db0e760ecf00d_480x.progressive.jpg?v=1573655051",
      name: "Avengers: Infinity War",
    },
    {
      _id: 2,
      img_src:
        "https://www.joblo.com/wp-content/uploads/2018/04/Ant-Man-and-The-Wasp-poster-2-1.jpg",
      name: "Ant-Man and the Wasp",
    },
    {
      _id: 3,
      img_src:
        "https://www.joblo.com/wp-content/uploads/2018/07/aquaman-teaser-poster-large-1-scaled.jpg",
      name: "Aquaman",
    },
    {
      _id: 4,
      img_src:
        "https://www.joblo.com/wp-content/uploads/2017/10/Black-Panther-poster-main-xl-1-400x600.jpg",
      name: "Black Panther",
    },
  ];

  return (
    <>
      {movieData === null ? (
        "loading"
      ) : (
        <>
          <Topbar />
          <section className="wrapperSection">
            <div className="movieSectionTop">
              <div className="movieSectionTopLeft">
                <img src={movieData.poster} alt="" className="movie-poster" />
              </div>
              <div className="movieSectionTopRight">
                <h2>{`${movieData.name} (${new Date(
                  movieData.release_date
                ).getFullYear()})`}</h2>
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "30%",
                    padding: "0",
                  }}
                >
                  <li style={{ listStyle: "none" }}>4K</li>
                  <li>English Hindi Tamil Telugu</li>
                </ul>
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "70%",
                    padding: "0",
                  }}
                >
                  <li style={{ listStyle: "none" }}>
                    <strong>{movieData.duration}</strong>
                  </li>
                  <li>
                    {movieData.genres.map((genre) => (
                      <strong>{genre.name + " "}</strong>
                    ))}
                  </li>
                  <li>
                    <strong>PG-13</strong>
                  </li>
                  <li>
                    <strong>
                      {movieData.release_status +
                        " on " +
                        formattedStringDate(movieData.release_date)}
                    </strong>
                  </li>
                </ul>
                <Link to="/user/booking" style={{ textDecoration: "none" }}>
                  <Button className="btn-book" onClick={handleSelectedMovie}>
                    Book Tickets
                  </Button>
                </Link>
              </div>
            </div>
            <div className="movieSectionBottom">
              <h2 className="about-wrapper-title">About the Movie</h2>
              <div className="about-wrapper">
                <p>{movieData.desc}</p>
              </div>
            </div>
          </section>
          <section className="aboutMovieSection">
            <h2 className="cast-title">Cast</h2>
            <div className="castCarouselWrapper">
              <div className="carouselLeftControl">
                <Button className="castPrevBtn">
                  <ChevronLeftIcon />
                </Button>
              </div>
              <div className="carouselContentArea">
                {movieData.cast.map((star) => {
                  return (
                    <div key={star._id} className="star-item">
                      <div className="cast-img-container">
                        <img src={star.img_src} alt="" />
                      </div>
                      <h5 className="star-name">{star.name}</h5>
                      <h5 className="star-name">{"as " + star.alias}</h5>
                    </div>
                  );
                })}

                {/* <div className="star-item item-3">
              <div className="cast-img-container">
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSSmnYAQibDuT6hui2tOflWvzJXlEs-MVwhLiyp8itsZX19_LGn"
                  alt=""
                />
              </div>
              <h5 className="star-name">David Harbour</h5>
              <h5 className="star-name"></h5>
            </div>
            <div className="star-item item-4">
              <div className="cast-img-container">
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSSmnYAQibDuT6hui2tOflWvzJXlEs-MVwhLiyp8itsZX19_LGn"
                  alt=""
                />
              </div>
              <h5 className="star-name">David Harbour</h5>
              <h5 className="star-name">as Alexei Shostakov / Red Guardian</h5>
            </div>
            <div className="star-item item-5">
              <div className="cast-img-container">
                <img
                  src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSSmnYAQibDuT6hui2tOflWvzJXlEs-MVwhLiyp8itsZX19_LGn"
                  alt=""
                />
              </div>
              <h5 className="star-name">David Harbour</h5>
              <h5 className="star-name">as Alexei Shostakov / Red Guardian</h5>
            </div> */}
              </div>
              <div className="carouselRightControl">
                <Button className="castNextBtn">
                  <ChevronRightIcon />
                </Button>
              </div>
            </div>
            <h2 className="crew-title">Crew</h2>
            <div className="crewCarouselWrapper">
              <div className="carouselLeftControl">
                <Button className="castPrevBtn">
                  <ChevronLeftIcon />
                </Button>
              </div>
              <div className="carouselContentArea">
                {movieData.crew.directors.map((crew__person) => {
                  return (
                    <div key={crew__person._id} className="star-item">
                      <div className="cast-img-container">
                        <img src={crew__person.img_src} alt="" />
                      </div>
                      <h5 className="star-name">{crew__person.name}</h5>
                      <h5 className="star-name">Director</h5>
                    </div>
                  );
                })}
                {movieData.crew.producers.map((crew__person) => {
                  return (
                    <div key={crew__person._id} className="star-item">
                      <div className="cast-img-container">
                        <img src={crew__person.img_src} alt="" />
                      </div>
                      <h5 className="star-name">{crew__person.name}</h5>
                      <h5 className="star-name">Producer</h5>
                    </div>
                  );
                })}
                {movieData.crew.writers.map((crew__person) => {
                  return (
                    <div key={crew__person._id} className="star-item">
                      <div className="cast-img-container">
                        <img src={crew__person.img_src} alt="" />
                      </div>
                      <h5 className="star-name">{crew__person.name}</h5>
                      <h5 className="star-name">Writer</h5>
                    </div>
                  );
                })}
              </div>
              <div className="carouselRightControl">
                <Button className="castNextBtn">
                  <ChevronRightIcon />
                </Button>
              </div>
            </div>
          </section>
          <section className="other-movies-ref">
            <h2 className="other-movies-ref-title">You might also like</h2>
            <div className="other-movies-CarouselWrapper">
              <div className="carouselLeftControl">
                <Button className="castPrevBtn">
                  <ChevronLeftIcon />
                </Button>
              </div>
              <div className="carouselContentArea">
                {OTHER__MOVIES.map((movie) => {
                  return (
                    <div key={movie._id} className="other-movie-item">
                      <div className="other-movie-img-container">
                        <img src={movie.img_src} alt="" />
                      </div>
                      <h5 className="star-name">{movie.name}</h5>
                    </div>
                  );
                })}
              </div>
              <div className="carouselRightControl">
                <Button className="castNextBtn">
                  <ChevronRightIcon />
                </Button>
              </div>
            </div>
            <h2 className="offers-title">Applicable Offers</h2>
            <div className="offers-div">
              <div className="offers-div-left">
                <div className="offer-logo">
                  <img
                    src="https://www.sundayguardianlive.com/wp-content/uploads/2019/10/rupay.jpg"
                    alt=""
                  />
                </div>
                <div className="offer-details">
                  <div className="offer-logo-title">
                    <h3 style={{ margin: "0" }}>RuPay Offer</h3>
                  </div>
                  <div className="offer-logo-desc">
                    <p style={{ margin: "0" }}>
                      Get 50% off up to INR 150 on all Rupay cards on
                      BookMyTicket bookings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="offers-div-right">
                <div className="offer-logo">
                  <img
                    src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2015/10/21/Pictures/hdfc-bank-logo-oficial-webiste_b8fd5eda-77f7-11e5-bc61-5d96ac0074a6.jpg"
                    alt=""
                  />
                </div>
                <div className="offer-details">
                  <div className="offer-logo-title">
                    <h3 style={{ margin: "0" }}>HDFC Cards Offer</h3>
                  </div>
                  <div className="offer-logo-desc">
                    <p style={{ margin: "0" }}>
                      Get 50% off up to INR 150 on all HDFC debit/ credit cards
                      on BookMyTicket bookings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />{" "}
        </>
      )}
    </>
  );
}
