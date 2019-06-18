
// import "./Home.css";

import logo from '../logo.svg';

import React, { Component } from "react";
// import { Link, BrowserRouter as Router } from "react-router-dom";

export default class Home extends Component {
    render() {
        return ( 
            <div className = "Home" >
                <div className = "lander" >
                    <div className = "body" > 
                        <header className = "App-header" >
                            <h1 > Project Management Action </h1> 
                            <img src = { logo } className = "App-logo" alt = "logo" />
                            <p>
                                Edit <code> src / App.js </code> and save to reload.  
                            </p>  
                            {/*<a className = "App-link"
                                href = "https://reactjs.org"
                                target = "_blank"
                                rel = "noopener noreferrer" > Learn React </a>*/}
                        </header >
                    </div>   
                </div > 
            </div>
        );
    }
}

// Specifies the default values for props:
// Home.defaultProps = {
//   name: 'Stranger'
// };