// .src/containers/ProjectsPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import ProjectForm from '../components/ProjectForm';
import ProjectsList from '../components/ProjectsList';
import Project from './Project';

const ProjectsPage = ({ match, projects }) => (
  <div className="row">
  	<div className="col-4">
	    <ProjectsList projects={projects} />
	    <Route exact path={match.url} render={() => (
	      <h3>Please select a Project from the list. Or <a className="btn" href={`${match.url}/new`}>Add a new one</a></h3>        
      )}/>
    </div>
    <div className="col-8">}/>
      <Route path={`${match.url}/new`} component={routerProps => <ProjectForm {...routerProps} /> }/>
    	<Route path={`${match.url}/:projectId`} component={routerProps => <Project projects={projects} {...routerProps} /> }/>
    </div>
  </div>

);

export default ProjectsPage;
