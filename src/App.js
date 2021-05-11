import React, {useState} from 'react';
import './App.css';
import About from './About'
import Contact from './Contact';

function App() {

  const [name, setName] = useState('ravi');

  return (
    <div className="App">
      <h1>Hellow</h1>
      {/* <About name = {name}/> */}
      <button onClick={() => setName('raviaaan')}>Update Props</button>
      <Contact name={name}/>
    </div>
  );
}

export default App;
