import axios from "axios";
import { API } from "./backend";

export const signinCall = async (userCredential, dispatch) => {
  dispatch({
    type: "LOGIN__START",
  });
  try {
    const res = await axios.post(API + "auth/signin", userCredential);
    authenticate(res.data);
    dispatch({
      type: "LOGIN__SUCCESS",
      payload: res.data,
    });
    dispatch({
      type: "UPDATE_LOCALSTORAGE_PAGESTATE",
    });
  } catch (error) {
    dispatch({
      type: "LOGIN__FAILURE",
      payload: error,
    });
  }
};

export const signout = () => {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem("jwt")) {
    localStorage.removeItem("jwt");
  }
  if (localStorage.getItem("persistedPageState")) {
    localStorage.removeItem("persistedPageState");
  }
};

export const authenticate = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  if (localStorage.getItem("jwt"))
    return JSON.parse(localStorage.getItem("jwt"));
  return false;
};

export const updateLocalStoragePageState = (pageState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("persistedPageState", JSON.stringify(pageState));
  }
};

export const loadPageStateFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("persistedPageState"));
  }
  return false;
};

// Movie API Calls

// Get a Specific movie

export const getSpecificMovie = async (movieName) => {
  try {
    return await axios
      .post(API + "movie/getSpecificMovie", {
        name: movieName,
      })
      .then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
};
