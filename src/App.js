import { useState } from 'react';
import './App.css';
import Contacts from './components/Contacts';
import FormComponent from './components/FormComponent';

const initialValues = {username:"", phoneNumber:"",gender:"Noinfo"}

function App() {
const [info, setInfo] = useState(initialValues)

  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo}/>
      <Contacts />
    </div>
  );
}

export default App;
