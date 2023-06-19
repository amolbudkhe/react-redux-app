import { useDispatch, useSelector, connect } from "react-redux";
import { Component } from "react";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const incrementByFiveHandler = () => {
    dispatch({ type: "increaseByFive" });
  };

  const decrementByFiveHandler = () => {
    dispatch({ type: "decreaseByFive" });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggleCounter" });
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

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
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
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//     incrementByFive: () => dispatch({ type: "increaseByFive" }),
//     decrementByFive: () => dispatch({ type: "decreaseByFive" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
