import { GET_TRANSACTIONS, GET_TRANSACTIONS_ERROR } from "../../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload
      };
    case GET_TRANSACTIONS_ERROR:
      return {
        ...state,
        transactions: []
      }
    default:
      return state;
  }
};
