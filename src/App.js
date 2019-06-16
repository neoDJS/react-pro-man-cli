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

class App extends Component {

    componentDidMount() {
        // fetch the cats
        this.props.fetchProjects();
        this.props.fetchWorkers();
        this.props.fetchUsers();
    }

    render() {
        return (
            <div className = "App" >
                <Header />
                <Routes lists={this.props.lists} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {    lists: {
                    projectsList: state.projects,
                    workersList: state.workers,
                    usersList: state.users
                }
            };
}

export default connect(mapStateToProps, { fetchProjects, fetchWorkers, fetchUsers })(App);