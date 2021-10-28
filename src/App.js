import React, { useState, Fragment } from 'react';
import AddUsers from './components/Users/AddUsers/AddUsers';
import UsersList from './components/Users/UsersList/UsersList';

const App=()=> {
    const [usersList, setUsersList] = useState([]);
    const addUserHandler =(userName,userAge)=>{
        setUsersList((prevState)=>{
            return [...prevState, {name: userName, age: userAge, id: Math.random(10000000000000000000000000000000)}]
        })
    }
    return (
        <Fragment>
           <AddUsers onAddUser={addUserHandler}/>
           <UsersList users={usersList}/>
        </Fragment>
    )
}

export default App;
