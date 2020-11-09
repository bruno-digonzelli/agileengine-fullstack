import React, { useReducer } from "react";
import axiosClient from "../../config/axios";
import CONSTANTS from "../../constants";
import { GET_TRANSACTIONS, GET_TRANSACTIONS_ERROR } from "../../types";
import GlobalContext from "./globalContext";
import GlobalReducer from "./globalReducer";

const GlobalState = ({ children }) => {
  // Constants
  const { INITIAL_STATE_CONTEXT } = CONSTANTS;

  // Reducer
  const [state, dispatch] = useReducer(GlobalReducer, INITIAL_STATE_CONTEXT);

  const getTransactions = async() => {
    try {
      const response = await axiosClient.get('/transactions');

      dispatch({
        type: GET_TRANSACTIONS,
        payload: response.data
      })
    } catch (error) {
      console.error(error.response.data);
      dispatch({
        type: GET_TRANSACTIONS_ERROR
      })
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
