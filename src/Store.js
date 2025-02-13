import { createStore } from "redux";

const initialState = {
  balance: 0,
  fullName: "",
  mobileNo: null,
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "fullName":
      return { ...state, fullName: action.payload };
    case "deposit":
      return { ...state, mobileNo: action.payload };
    default:
      return state;
  }
}

const store = createStore(accountReducer);

console.log(store.getState());

store.dispatch({ type: "deposit", payload: 1000 });
console.log(store.getState());
store.dispatch({ type: "withdraw", payload: 100 });
console.log(store.getState());
store.dispatch({ type: "fullName", payload: "alexander" });
console.log(store.getState());
store.dispatch({ type: "mobileNo", payload: 987654321 });
console.log(store.getState());
