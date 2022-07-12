import React from "react";

import styles from './UsersBox.module.css'

import UserCard from './UserCard'

const UsersBox = (props) => {


    if(props.items.length>0){
        return (
            <ul className={styles.users_box}>
    
                    {props.items.map(user => {
                        return <UserCard key={user.id} username={user.username} age={user.age} />;
                    })}
                
            </ul>
        );
    }


};

export default UsersBox;