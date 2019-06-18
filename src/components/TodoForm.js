
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { addTodo } from '../actions/projectActions'

class TodoForm extends Component {

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
    this.props.addTodo(this.props.url, data);
  }

  render(){
    const { todo } = this.props
    return (
      <article>
        <header><h2>New Task</h2></header>
        <div>
          <form id="createTodo" onSubmit={this.handleSubmit} method="POST">
            <div>
              <label>Task</label>
              <input name="todo[task]" id="todo_task" value={todo.task} required/>
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

export default connect(null, { addTodo })(TodoForm);