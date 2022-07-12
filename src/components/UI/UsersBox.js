import React from "react";

import styles from './UsersBox.module.css'

import UserCard from './UserCard'

const UsersBox = (props) => {


    if(props.items.length===0){
        return (
            <div className={styles.users_box}>
            
                <h2>No users found !</h2>


            </div>
        );
    }

    return (
        <ul className={styles.users_box}>

                {props.items.map(user => {
                    return <UserCard key={user.id} username={user.username} age={user.age} />;
                })}
            
        </ul>
    );

};

export default UsersBox;