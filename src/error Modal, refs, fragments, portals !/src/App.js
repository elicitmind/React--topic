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
    
  };
  return (
    <>
      <AddUserForm onAddUser={addUserHandler} />
      <UsersList data={usersData} />
    </>
  );
}

export default App;
