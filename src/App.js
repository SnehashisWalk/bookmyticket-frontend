import { useContext, useEffect } from "react";
import Home from "./components/home/Home";
import Modal from "./components/modal/Modal";
import Movie from "./pages/movie/Movie";
import Topbar from "./components/topbar/Topbar";
import { PageContext } from "./context/PageContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./components/helper/ScrollToTop";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./helper/PrivateRoute";
import Booking from "./pages/booking/Booking";
import Calendar from "./components/calendar/Calendar";
import TimePicker from "./components/time-picker/TimePicker";
import { loadPageStateFromLocalStorage } from "./apiCalls";
import Admin from "./pages/admin/Admin";

function App() {
  const { pageState, dispatch } = useContext(PageContext);

  useEffect(() => {
    if (pageState.user === null && localStorage.getItem("jwt") !== null) {
      console.log("loading form persisted state");
      dispatch({
        type: "LOADED_PAGESTATE_FROM_LOCALSTORAGE",
        payload: loadPageStateFromLocalStorage(),
      });
    }
  }, []);

  // const checkWhetherPageRefreshed = () => {
  //   if (pageState.user === null && localStorage.getItem("jwt") !== null) {
  //     dispatch({
  //       type: "LOADED_PAGESTATE_FROM_LOCALSTORAGE",
  //       payload: loadPageStateFromLocalStorage(),
  //     });
  //   }
  // };

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path={`/${pageState.currentMovieNav}`}>
            <ScrollToTop />
            <Movie />
          </Route>
          <PrivateRoute path="/profile" exact component={Profile} />
          <PrivateRoute path="/user/booking" exact component={Booking} />
        </Switch>
      </Router>
    </>
  );
  // return <Admin />;
}

export default App;
// <div>
//   <Topbar />
//   <Home />
// </div>
// <Movie />
