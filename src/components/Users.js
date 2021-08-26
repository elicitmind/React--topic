import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';



class Users extends Component {
  //create and initialize the state
  constructor() {
  //when you call constructor to an extended class you need to use super() method
    super()
  //state in class-based components is always an object where you group all the states required
  //.state method is delivered by 'Component' from 'react'
    this.state = {
      showUsers: true,
      moreState: 'Testing Might',
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided")
    }
  }

  toggleUsersHandler() {
    //method setState() delivered by react to update the state object.
    //It merges - not overrides the current state object!
    this.setState((prevValue) => {
      return { showUsers: !prevValue.showUsers };
    });
  }



  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    

    return (
      <div className={classes.users}>
    {/* TO USE OUR DEFINED METHOD WE USE this.MethodName.bind(this) -so 'this' is referring to the same class*/}
        <button onClick={this.toggleUsersHandler.bind(this)}>
    {/* WE ACCESS OUR STATE USING 'this.state.stateKeyName' */}
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;

