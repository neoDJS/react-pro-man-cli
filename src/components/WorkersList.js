import React from 'react';
import { Link } from 'react-router-dom';

const WorkersList = ({ workers=[] }) => {
  const renderWorkers = workers.map(worker =>
    <li><Link key={worker.id} to={`/workers/${worker.id}`}>{worker.name}</Link></li>
  );

  return (
    <article className = "App-header" >
        <header><h1>Workers List</h1></header>
        <ul>
            {this.renderWorkers}
        </ul>
        <footer></footer>
    </article> 
  );
};

export default WorkersList;
