
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { addWorker } from '../actions/workerActions'

class WorkerForm extends Component {

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
    // const data = {}.serialize();
    this.props.addWorker(data);
  }

  render(){
    const { worker, user } = this.props
    return (
      <article>
        <header><h1>New Worker</h1></header>
        <div>
          <form id="createWorker" onSubmit={this.handleSubmit}>
            <div>
              <label>User Name</label>
              <input name="user[user_attributes][name]" id="worker_name" value={worker.user.name||user.name}/>
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="user[user_attributes][email]" id="worker_email" value={worker.user.emai||user.email}/>
            </div>
            <div>
              <label>Password</label>
              <input type="password" name="user[user_attributes][password]" id="worker_password" value={worker.user.password||user.password} /> 
            </div>
            <div>
              <label>Title</label>
              <input name="worker[title]" id="worker_title" value={worker.title}/> 
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

export default connect(null, { addWorker })(WorkerForm);