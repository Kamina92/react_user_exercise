import React from "react";

import styles from './UserCard.module.css'

const UserCard = (props) => {

    return (
        <li key={props.id} className={styles.user_card}>
            <p >{props.username} ({props.age} years old)</p>
        </li>
    );

};

export default UserCard; 