import { useDispatch, useSelector } from "react-redux";
// import { connect } from "react-redux";
import { counterActions } from "../store/counter";
// import { Component } from "react";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    // dispatch({ type: "increment" });
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    // dispatch({ type: "decrement" });
    dispatch(counterActions.decrement());
  };

  const incrementByFiveHandler = () => {
    // dispatch({ type: "increaseByFive" });
    dispatch(counterActions.increase(5));
  };

  const decrementByFiveHandler = () => {
    // dispatch({ type: "decreaseByFive" });
    dispatch(counterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: "toggleCounter" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{showCounter && counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementByFiveHandler}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }

//   incrementByFiveHandler() {
//     this.props.incrementByFive();
//   }

//   decrementByFiveHandler() {
//     this.props.decrementByFive();
//   }

//   toggleCounterHandler() {
//     console.log("1121321312312");
//     this.props.toggleCounter();
//   }

//   render() {
//     const showCounter = this.props.showCounter;
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         {showCounter && (
//           <div className={classes.value}>{this.props.counter}</div>
//         )}
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.incrementByFiveHandler.bind(this)}>
//             Increment by 5
//           </button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           <button onClick={this.decrementByFiveHandler.bind(this)}>
//             Decrement By 5
//           </button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter, showCounter: state.showCounter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//     incrementByFive: () => dispatch({ type: "increaseByFive" }),
//     decrementByFive: () => dispatch({ type: "decreaseByFive" }),
//     toggleCounter: () => dispatch({ type: "toggleCounter" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
