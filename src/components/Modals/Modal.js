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
        <div className={styles.modal_bg} onClick={()=> props.setIsModalOpen(false)} >
            <div className={styles.modal}>
                <div className={styles.modal_head}>
                    <h2>Invalid input</h2>
                </div>
                <div className={styles.modal_body}>
                    {ModalBody}
                </div>
                <div style={{display:'flex',justifyContent:'end'}}>
                    <button className={styles.modal_button} onClick={()=> props.setIsModalOpen(false)} >Okay</button>
                </div>
            </div>
        </div>
    );

};

export default Modal;