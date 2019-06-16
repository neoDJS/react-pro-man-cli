// .src/containers/UsersPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import UsersList from '../components/UsersList';
import User from './User';

const UsersPage = ({ match, users }) => (
  <div className="row">
  	<div className="col-4">
	    <UsersList users={users} />
	    <Route exact path={match.url} render={() => (
	      <h3>Please select a User from the list.</h3>
	    )}/>
    </div>
    <div className="col-8">
    	<Route path={`${match.url}/:userId`} component={routerProps => <User users={users} {...routerProps} /> }/>
    </div>
  </div>

);

export default UsersPage;
