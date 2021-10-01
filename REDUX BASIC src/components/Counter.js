import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

import classes from './Counter.module.css';

const Counter = () => {
  //calling useSelector method automatically sets up a subscription to the store!!
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.isShown);

  const countBy = counterActions.countBy;
  const toggleCounter = counterActions.toggleCounter;

  const dispatch = useDispatch();

  const incrementCountHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementCountBy5Handler = () => {
    dispatch(countBy(5)); // {type: SOME_UNIQUE_ID, payload: 5} is sent as action
  };

  const decrementCountHandler = () => {
    dispatch(counterActions.countBy(-1));
  };

  const decrementCountBy5Handler = () => {
    dispatch(counterActions.countBy(-5));
  };

  const toggleCounterHandler = () => {
    dispatch(toggleCounter());
  };

  return (
    <main className={classes.counter}>
      {isShow && (
        <div>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div className={classes.actions}>
            <button onClick={incrementCountHandler}>+</button>
            <button onClick={incrementCountBy5Handler}>+5</button>
            <button onClick={decrementCountHandler}>-</button>
            <button onClick={decrementCountBy5Handler}>-5</button>
          </div>
        </div>
      )}
      <button onClick={toggleCounterHandler}>toggle counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementCountHandler() {
//     this.props.increment()
//   }

//   decrementCountHandler() {
//     this.props.decrement()
//   }

//   toggleCountHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div className={classes.actions}>
//           <button onClick={this.incrementCountHandler.bind(this)}>+</button>
//           <button onClick={this.decrementCountHandler.bind(this)}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>toggle counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({type: 'plus'}),
//     decrement: () => dispatch({type: 'minus'})
//   }
// }

// //HIGHER ORDER COMPONENT
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
