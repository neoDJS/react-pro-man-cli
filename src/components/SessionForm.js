
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../form.css';
import { connect } from 'react-redux'
import { login } from '../actions/sessionActions'

class SessionForm extends Component {

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    if (!e.target.checkValidity()) {
      return;
    }

    const data = new FormData(e.target);
    this.props.login(data);
  }

  render(){
    const { credentials } = this.props;
    return (
      <article>
        <header><h1>Login</h1></header>
        <div>
          <form className="container1" id="login" onSubmit={this.handleSubmit}>
            <div className="row1">
              <label htmlFor="email" className="col1">Email : </label>
              <input className="col1" type="email" name="email" id="email" value={credentials.email} required />
            </div>
            <div className="row1">
              <label htmlFor="password" className="col1">Password : </label>
              <input className="col1" type="password" name="password" id="password" required /> 
            </div>
            <div class="actions">
              <input type="submit" value="Save" />
            </div>
          </form> 
        </div>
        <footer></footer>
      </article>
    );
  }
}

export default connect(null, { login })(SessionForm);