
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { addUser } from '../actions/userActions'

class UserForm extends Component {

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
    this.props.addUser(data);
  }

  render(){
    const { user } = this.props
    return (
      <article>
        <header><h1>New User</h1></header>
        <div>
          <form id="createUser" onSubmit={this.handleSubmit}>
            <div>
              <label>User Name</label>
              <input name="user[name]" id="user_name" value={user.name}/>
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="user[email]" id="user_email" value={user.email}/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="user[password]" id="user_password" /> 
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

export default connect(null, { addUser })(UserForm);