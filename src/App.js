import { useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import FormComponent from './components/FormComponent';
import {AddUser} from "./utils/functions"

const initialValues = {username:"", phoneNumber:"",gender:"Noinfo"}

function App() {
const [info, setInfo] = useState(initialValues)

const handleSubmit = (e) => {
  e.preventDefault()
  AddUser(info)
  setInfo(initialValues)
}

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit}/>
      <Contacts />
    </div>
  );
}

export default App;
