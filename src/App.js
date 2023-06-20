import { useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import FormComponent from './components/FormComponent';
import {AddUser, UpdateUser} from "./utils/functions"


const initialValues = {username:"", phoneNumber:"", gender:"NO INFO"}

function App() {
const [info, setInfo] = useState(initialValues)
const [isAdd, setIsAdd] = useState("ADD")

const handleSubmit = (e) => {
  e.preventDefault()
  if(info.id) {
    UpdateUser(info)
  }
  else {
    AddUser(info)
  }
  setInfo(initialValues)
  setIsAdd("ADD")
  // console.log(info)
}

const editUser = (id, username, phoneNumber, gender) => {
  setIsAdd("UPDATE")
  setInfo({id, username, phoneNumber, gender});
};

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit} isAdd={isAdd} />
      <Contacts editUser={editUser} />
    </div>
  );
}

export default App;
