import { updateLocalStoragePageState } from "../apiCalls";

const PageReducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case "UPDATE_LOCALSTORAGE_PAGESTATE":
      updateLocalStoragePageState(state.pageState);
      return state;

    case "LOADED_PAGESTATE_FROM_LOCALSTORAGE":
      return {
        pageState: action.payload,
      };

    case "SIGNINMODAL":
      let signinChange = {
        ...state.pageState,
        modalState: {
          ...state.pageState.modalState,
          signinModal: !state.pageState.modalState.signinModal,
        },
      };
      return {
        pageState: {
          ...signinChange,
        },
      };

    case "SIGNUPMODAL":
      let signupChange = {
        ...state.pageState,
        modalState: {
          ...state.pageState.modalState,
          signupModal: !state.pageState.modalState.signupModal,
        },
      };
      return {
        pageState: {
          ...signupChange,
        },
      };
    case "CURRENTMOVIENAV":
      let currentMovieNavChange = {
        ...state.pageState,
        currentMovieNav: action.payload,
      };
      return {
        pageState: {
          ...currentMovieNavChange,
        },
      };
    case "LOGIN__START":
      return {
        pageState: {
          ...state.pageState,
          user: null,
          isFetching: true,
          error: false,
        },
      };
    case "LOGIN__SUCCESS":
      return {
        pageState: {
          ...state.pageState,
          user: action.payload.user,
          isFetching: false,
          error: false,
          modalState: {
            signupModal: false,
            signinModal: false,
          },
        },
      };
    case "LOGIN__FAILURE":
      return {
        pageState: {
          ...state.pageState,
          user: null,
          isFetching: false,
          error: action.payload,
        },
      };

    case "LOGOUT":
      return {
        pageState: {
          ...state.pageState,
          modalState: {
            signupModal: false,
            signinModal: false,
          },
          currentMovieNav: {
            name: "",
          },
          user: null,
          isFetching: false,
          error: false,
          selectedDate: null,
          selectedTimeSlot: null,
        },
      };

    case "SELECTED__DATE":
      return {
        pageState: {
          ...state.pageState,
          selectedDate: action.payload,
        },
      };

    case "SELECTED__TIME__SLOT":
      return {
        pageState: {
          ...state.pageState,
          selectedTimeSlot: action.payload,
        },
      };
    case "SELECTED__MOVIE":
      return {
        pageState: {
          ...state.pageState,
          selectedMovie: action.payload,
        },
      };
    case "SIDEBAR":
      return {
        pageState: {
          ...state.pageState,
          sidebar: !state.pageState.sidebar,
        }
      }
    default:
      return state;
  }
};

export default PageReducer;
