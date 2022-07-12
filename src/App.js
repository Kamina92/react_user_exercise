import React, {useState} from "react";

import styles from './App.module.css'

import CardForm from "./components/UI/CardForm";

import UsersBox from './components/UI/UsersBox'

// const Dummy_data = [
//   {id:1, username:'test',age:20}
// ];


function App() {

  const [users,setUsers] = useState([]);
  
  const addNewUser = (user) => {


    if(users.length>0){
      setUsers(prevUsers=>{
        return [user, ...prevUsers];
      });
    }else {
     
      setUsers([user]);
    }




  };

  return (
    <div className={styles.container}>
      <CardForm onUserSubmit={addNewUser} />
      <UsersBox items={users} />
    </div>
  );
}

export default App;
