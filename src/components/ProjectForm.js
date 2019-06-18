
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { addProject } from '../actions/projectActions'

class ProjectForm extends Component {

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
    this.props.addProject(data);
  }

  render(){
    const { project } = this.props
    return (
      <article>
        <header><h1>New Project</h1></header>
        <div>
          <form id="createProject" onSubmit={this.handleSubmit}>
            <div>
              <label>Name</label>
              <input name="project[name]" id="project_name" value={project.name} required/>
            </div>
            <div>
              <label>Description</label>
              <input name="project[description]" id="project_description" value={project.description}/>
            </div>
            <div>
              <label>Priority</label>
              <input name="project[priority]" id="project_priority" value={project.priority} required/> 
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

export default connect(null, { addProject })(ProjectForm);