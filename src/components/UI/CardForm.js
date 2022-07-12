import React from "react";
import UserForm from '../UserForm/UserForm';

import styles from './CardForm.module.css';

const CardForm = (props) => {

    let newUserData = {};

    const saveUser = (user) => {

        newUserData=user;

        props.onUserSubmit(newUserData);

    }

    return (
        <div className={styles.card_form}>
            <UserForm onUserSubmit={saveUser} />
        </div>
    );

};

export default CardForm;