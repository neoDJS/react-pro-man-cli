// import { Link } from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
import React from "react";

export default function Header() {
    return ( 
        <div className = "Menu" >
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Pro - Man</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/projects">Projects</Nav.Link>
                  <Nav.Link href="/workers">Workers</Nav.Link>
                  <Nav.Link href="/users">Users</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                  </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div> 
    );
}