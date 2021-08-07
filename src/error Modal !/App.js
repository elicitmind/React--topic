import React, { useState } from 'react';
import AddUserForm from './components/Users/AddUserForm';
import UsersList from './components/Users/UsersList';
// import Card from './components/UI/Card'

function App() {
  const [usersData, setUsersData] = useState([]);

  const addUserHandler = (newUser) => {
    newUser.id = Math.random().toString() ;
    
    setUsersData((prevState) => {
      return [newUser, ...prevState];
    });
    console.log(usersData);
  };
  return (
    <div>
      <AddUserForm onAddUser={addUserHandler} />
      <UsersList data={usersData} />
    </div>
  );
}

export default App;
