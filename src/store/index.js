import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
// import { createStore } from "redux";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increaseByFive") {
//     return {
//       counter: state.counter + 5,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decreaseByFive") {
//     return {
//       counter: state.counter - 5,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggleCounter") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
