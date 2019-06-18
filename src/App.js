import './App.css';
import Routes from "./routes";
import Header from "./header";
// import logo from './logo.svg';
import React, { Component } from 'react';
// import { Navbar } from 'react-bootstrap';



import { connect } from 'react-redux'
import { fetchProjects } from './actions/projectActions'
// import { fetchTodos } from './actions/todoActions'
import { fetchWorkers } from './actions/workerActions'
import { fetchUsers } from './actions/userActions'
import { startConnection, logout} from './actions/sessionActions'

class App extends Component {

    componentDidMount() {
        // fetch the cats
        this.props.startConnection();
        this.props.fetchProjects();
        this.props.fetchWorkers();
        this.props.fetchUsers();
    }

    render() {
        return ( 
            <div className="App">
                <Header user={this.props.login} logout={this.props.logout} />
                <Routes lists={this.props.lists} user={this.props.login} /> 
            </div> //
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lists: {
            projectsList: state.projects.list,
            workersList: state.workers.list,
            usersList: state.users.list
        },
        login: state.session.login
    };
}

export default connect(mapStateToProps, { fetchProjects, fetchWorkers, fetchUsers, startConnection, logout })(App);