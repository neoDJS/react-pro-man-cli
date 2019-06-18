import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsList = ({ projects=[] }) => {
  const renderProjects = projects.map(project =>
    <li><Link key={project.id} to={`/projects/${project.id}`}>{project.name}</Link></li>
  );

  return (
    <article className = "App-header" >
        <header><h1>Projects List</h1></header>
        <ul>
            {this.renderProjects}
        </ul>
        <footer></footer>
    </article> 
  );
};

export default ProjectsList;
