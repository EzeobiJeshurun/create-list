import React, { useState } from 'react';
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
        <div>
           <AddUsers onAddUser={addUserHandler}/>
           <UsersList users={usersList}/>
        </div>
    )
}

export default App;
