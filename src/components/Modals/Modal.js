import React from "react";

import styles from './Modal.module.css';

const Modal = (props) => {

    let ModalBody='';

    if (props.age<=0 && props.username==='') {
        ModalBody= <p>Please insert Username and Age</p>;
    } else if(props.age<=0) {
        ModalBody= <p>Age can't be 0 or negative !</p>; 
    } else {
        ModalBody= <p>Please insert a Username</p>; 
    }


    return (
        <div className={styles.modal_bg}>
            <div className={styles.modal}>
                <div className={styles.modal_head}>
                    <h2>Invalid input</h2>
                </div>
                <div className={styles.modal_body}>
                    {ModalBody}
                </div>
                <button onClick={()=> props.setIsModalOpen(false)} >Okay</button>
            </div>
        </div>
    );

};

export default Modal;