
import { Link } from 'react-router-dom';
import React, { Component } from "react";

export default class Worker extends Component {      
    renderTodos = (todos, match)=> todos.map(todo =>
        <li><Link key={todo.id} to={`/projects/${todo.project.id}/todos/${todo.id}`}>{todo.task}</Link></li>
    );     

    render() {
        let {match, workers} = this.props;
        let worker = workers[match.params.workerId];
        return (
                <article className = "App-header" >
                    <header><h1>Worker #{worker.id} ({worker.name})</h1></header>
                    <p><strong>Title:</strong>{worker.title}</p>
                    <br></br>
                    <ul>
                        {this.renderTodos(worker, match)} 
                    </ul>
                    <footer><a href={`/users/${worker.created_by.id}`}>created { worker.created_at } by { worker.created_by.name }</a></footer>
                </article>
            );
    }
}