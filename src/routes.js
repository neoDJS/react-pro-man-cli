
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import ProjectsPage from "./containers/ProjectsPage";
import WorkersPage from "./containers/WorkersPage";
import UsersPage from "./containers/UsersPage";
import SessionForm from "./components/SessionForm";
import React from "react";

const Routes = ({ lists, user }) => {
	if(!user.id){
		return (
			<Switch >
			    <Route exact path = "/" component = { Home } />
			    <Route path='/login' render={routerProps => <SessionForm {...routerProps} credentials={user} />} />
			</Switch>
		);
	} else{
		return (
			<Switch >
			    <Route exact path = "/" component = { Home } />
			    <Route path='/projects' render={routerProps => <ProjectsPage {...routerProps} projects={lists.projectsList} />} />
			    <Route path='/workers' render={routerProps => <WorkersPage {...routerProps} workers={lists.workersList} />} />
			    <Route path='/users' render={routerProps => <UsersPage {...routerProps} users={lists.usersList} />} />
			    <Route path='/login' render={routerProps => <Home {...routerProps} />} />
			</Switch>
		);
	}
}

export default Routes;