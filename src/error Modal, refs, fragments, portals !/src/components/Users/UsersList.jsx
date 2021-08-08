import React from 'react';
import UserPoint from './UserPoint';
import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.data.map((e) => {
          return <UserPoint name={e.name} age={e.age} key={e.id} />;
        })}
      </ul>
    </Card>
  );
};

export default UsersList;
