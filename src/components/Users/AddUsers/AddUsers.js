import React, { useState, Fragment } from "react";
import Card from "../../UI/Card/Card";
import styles from "./AddUsers.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUsers = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      return;
    }

    if(+enteredAge < 1){
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

  return (
    <Fragment>
    <ErrorModal />
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
