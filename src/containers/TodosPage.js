// .src/containers/TodosPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import TodosList from '../components/TodosList';
import Todo from './Todo';

const TodosPage = ({ match, todos }) => (
  <div className="row">
  	<div className="col-4">
	    <TodosList todos={todos} />
	    <Route exact path={match.url} render={() => (
	      <h3>Please select a Todo from the list.</h3>
	    )}/>
    </div>
    <div className="col-8">
    	<Route path={`${match.url}/:todoId`} component={routerProps => <Todo todos={todos} {...routerProps} /> }/>
    </div>
  </div>

);

export default TodosPage;
