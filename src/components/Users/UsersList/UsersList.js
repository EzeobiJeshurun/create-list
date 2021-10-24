import React from "react";
import PropTypes from "prop-types";
import Card from "../../UI/Card/Card";
import styles from "./UsersLists.module.css";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map?.((user, index) => (
          <li key={user.id}>
            {user.name} ({user.age}) years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

UsersList.propTypes = {
    users: PropTypes.array,
};

export default UsersList;
