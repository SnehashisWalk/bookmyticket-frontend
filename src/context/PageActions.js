export const UPDATELOCALSTORAGEPAGESTATE = () => {
  return {
    type: "UPDATE_LOCALSTORAGE_PAGESTATE",
  };
};

export const LOADEDPAGESTATEFROMLOCALSTORAGE = (persistedPageState) => {
  return {
    type: "LOADED_PAGESTATE_FROM_LOCALSTORAGE",
    payload: persistedPageState,
  };
};

export const SIGNINMODAL = () => {
  return {
    type: "SIGNINMODAL",
  };
};

export const SIGNUPMODAL = () => {
  return {
    type: "SIGNUPMODAL",
  };
};

export const CURRENTMOVIENAV = (currentMovie) => {
  return {
    type: "CURRENTMOVIENAV",
    payload: currentMovie,
  };
};

export const LOGINSTART = (userCredentials) => {
  return {
    type: "LOGIN__START",
  };
};

export const LOGINSUCCESS = (user) => {
  return {
    type: "LOGIN__SUCCESS",
    payload: user,
  };
};

export const LOGINFAILED = (error) => {
  return {
    type: "LOGIN__FAILURE",
    payload: error,
  };
};

export const LOGOUT = () => {
  return {
    type: "LOGOUT",
  };
};

export const SELECTEDDATE = (date) => {
  return {
    type: "SELECTED__DATE",
    payload: date,
  };
};

export const SELECTEDTIMESLOT = (timeSlot) => {
  return {
    type: "SELECTED__TIME__SLOT",
    payload: timeSlot,
  };
};

export const SELECTEDMOVIE = (movieDetails) => {
  return {
    type: "SELECTED__MOVIE",
    payload: movieDetails,
  };
};

export const SIDEBAR = () => {
  return {
    type: "SIDEBAR",
  }
}