import React, {useState} from 'react';
import './App.css';
import About from './About'
import Contact from './Contact';
import Users from './Users';
import CreateUser from './CreateUser';

function App() {

  const [name, setName] = useState('ravi');

  return (
    <div className="App">
      <h1>Hellow</h1>

      <CreateUser />


      {/* <Users /> */}



      {/* <Contact></Contact> */}



      {/* PROPS */}
      {/* <About name = {name}/> */}
      {/* <button onClick={() => setName('raviaaan')}>Update Props</button> */}
      {/* <Contact name={name}/> */}
    </div>
  );
}

export default App;
