import React, { useState, Fragment } from "react";
import Card from "../../UI/Card/Card";
import styles from "./AddUsers.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age"
      })
      return;
    }

    if(+enteredAge < 1){
      setError({
        title: "Invalid age",
        message: "Please enter a valid age > 0"
      })
      return;
    }
    props.onAddUser(enteredUsername,enteredAge);
    setEnteredAge("");
    setEnteredUsername("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const closeModalHandler=()=>{
    setError(false);
  }

  return (
    <Fragment>
    {error && <ErrorModal title={error.title} message={error.message} onClose={closeModalHandler}/>}
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">username</label>
        <input
          value={enteredUsername}
          id="username"
          onChange={usernameChangeHandler}
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          value={enteredAge}
          id="age"
          type="number"
          onChange={ageChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Fragment>
  );
};

export default AddUsers;
