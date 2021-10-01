import {Component} from 'react'
import { connect } from 'react-redux';

import classes from './Counter.module.css';


class Counter extends Component {
  incrementCountHandler() {
    this.props.increment()
  }

  decrementCountHandler() {
    this.props.decrement()
  }

  toggleCountHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div className={classes.actions}>
          <button onClick={this.incrementCountHandler.bind(this)}>+</button>
          <button onClick={this.decrementCountHandler.bind(this)}>-</button>
        </div>
        <button onClick={this.toggleCounterHandler}>toggle counter</button>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({type: 'plus'}),
    decrement: () => dispatch({type: 'minus'})
  }
}

//HIGHER ORDER COMPONENT
export default connect(mapStateToProps, mapDispatchToProps)(Counter);