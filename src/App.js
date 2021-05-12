import React, { useState } from 'react';
import './App.css';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Users from './Users';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CreateUser from './CreateUser';
import { Navbar, Nav } from 'react-bootstrap';

function App() {

  const [name, setName] = useState('ravi');

  return (
    <div className="App">

      <Router>

        {/* With bootstrap routing */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/" >Home</Link><br /></Nav.Link>
            <Nav.Link href="#features"><Link to="/about" >About us</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact" >Contact us</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/userList" >User List</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/createUser" >Create User</Link></Nav.Link>
          </Nav>
        </Navbar>
        <br />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. 
            if current url has given path then associated component will render ex - url = /about then
            <About /> - this component will rendered
            */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/userList">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/createUser">
            <CreateUser />
          </Route>
          {/* Home component will come at last since its path is only / so it will match above cases
          therefore we wrote last */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>




        {/* below is example to routing but above we have used bootstrap for better UI
        <Link to="/about" >About us</Link><br /> 
        */}


        {/* <h1>Hellow</h1>

        <CreateUser /> */}


        {/* <Users /> */}



        {/* <Contact></Contact> */}



        {/* PROPS */}
        {/* <About name = {name}/> */}
        {/* <button onClick={() => setName('raviaaan')}>Update Props</button> */}
        {/* <Contact name={name}/> */}
      </Router>
    </div>
  );
}

export default App;
