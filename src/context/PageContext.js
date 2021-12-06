import { createContext, useReducer } from "react";
import PageReducer from "./PageReducer";

const INITIAL_STATE = {
  pageState: {
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
    selectedMovie: null,
    selectedDate: null,
    selectedTimeSlot: null,
    sidebar: false
  },
};

export const PageContext = createContext(INITIAL_STATE);

export const PageContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PageReducer, INITIAL_STATE);

  return (
    <PageContext.Provider
      value={{
        pageState: state.pageState,
        dispatch,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
