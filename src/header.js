// import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import React from "react";

export default function Header({user, logout}) {
    return ( 
      <div className = "Menu" >
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Pro - Man</Navbar.Brand>
          <Options user={user} />
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Login user={user} logout={logout} />
          </Navbar.Collapse>
        </Navbar>
      </div> 
    );
}

const Options = ({user}) => {
  if (!user.id) {
    return (
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    );
  } else {
    return (
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/workers">Workers</Nav.Link>
        <Nav.Link href="/users">Users</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    );
  }
};


const Login = ({user, logout}) => {
  if (!user.id) {
    return (
      <>
        <Navbar.Text>
          <a className="btn" href="/login">Signed in</a>
        </Navbar.Text>
      </>
    );
  } else {
    return (
      <>
        <Navbar.Text>
          Signed in as: <a href="/users/{user.id}">{user.name}</a>
        </Navbar.Text>
        <Navbar.Text>
          <a href="#logout" onClick={()=> logout()}>Logout</a>
        </Navbar.Text>
      </>
    );
  }
};