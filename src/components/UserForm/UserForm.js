import React, {useState} from "react";

import styles from './UserForm.module.css';

import Modal from "../Modals/Modal";

const UserForm = (props) => {

    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isModalOpen,setIsModalOpen] = useState(false);

    let user = {};

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const cleanForm = () => {

        setEnteredUsername('');
        setEnteredAge('');

    };


    const submitHandler = (event) =>{

        event.preventDefault();

        if((enteredUsername==='' && enteredAge==='') || enteredAge<=0 || enteredUsername===''){
            setIsModalOpen(true);
        }else{
            user={
                id : Math.random().toString(),
                username : enteredUsername,
                age : enteredAge
            };
    
            props.onUserSubmit(user)
    
            cleanForm();
        }

    };

    return (
        
        <form onSubmit={submitHandler}>
                {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} username={enteredUsername} age={enteredAge} />}
                <div className={styles.form_input_div}>
                    <label style={{display:'block'}} htmlFor="username" >Username</label>
                    <input className={styles.form_input} id="username" type="text" value={enteredUsername} onChange={usernameHandler} />
                </div>
                <div className={styles.form_input_div}>
                    <label style={{display:'block'}} htmlFor="age" >Age(Years)</label>
                    <input className={styles.form_input} id="age" type="number" value={enteredAge} onChange={ageHandler} />
                </div>
                <div className={styles.form_input_div}>
                    <button type="submit" >Add User</button>
                </div>
            </form>
        
    );

};


export default UserForm;