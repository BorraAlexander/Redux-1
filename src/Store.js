import { createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: "",
  mobileNo: null,
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + +action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - +action.payload };
    case "fullName":
      return { ...state, fullName: action.payload };
    case "mobileNo":
      return { ...state, mobileNo: action.payload };
    case "reSet":
      return initialState;
    default:
      return state;
  }
}

const Store = createStore(accountReducer);

Store.dispatch({ type: "deposit", payload: 1000 });

Store.dispatch({ type: "withdraw", payload: 100 });

Store.dispatch({ type: "fullName", payload: "alexander" });

Store.dispatch({ type: "mobileNo", payload: 987654321 });

Store.dispatch({ type: "reSet" });

export default Store;
