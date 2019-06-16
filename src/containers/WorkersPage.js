// .src/containers/WorkersPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import WorkersList from '../components/WorkersList';
import Worker from './Worker';

const WorkersPage = ({ match, workers }) => (
  <div className="row">
  	<div className="col-4">
	    <WorkersList workers={workers} />
	    <Route exact path={match.url} render={() => (
	      <h3>Please select a Worker from the list.</h3>
	    )}/>
    </div>
    <div className="col-8">
    	<Route path={`${match.url}/:workerId`} component={routerProps => <Worker workers={workers} {...routerProps} /> }/>
    </div>
  </div>

);

export default WorkersPage;
