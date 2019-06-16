
import { Route, Switch } from "react-router-dom";

import Home from "./containers/Home";
import ProjectsPage from "./containers/ProjectsPage";
import WorkersPage from "./containers/WorkersPage";
import UsersPage from "./containers/UsersPage";
import React from "react";

const Routes = ({ lists }) =>
<Switch >
    <Route exact path = "/" component = { Home } />
    <Route path='/projects' render={routerProps => <ProjectsPage {...routerProps} projects={lists.projectsList} />} />
    <Route path='/workers' render={routerProps => <WorkersPage {...routerProps} workers={lists.workersList} />} />
    <Route path='/users' render={routerProps => <UsersPage {...routerProps} users={lists.usersList} />} />
</Switch>;

export default Routes;