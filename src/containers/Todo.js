
import { Link } from 'react-router-dom';
import React, { Component } from "react";

export default class Todo extends Component {     
    renderWorkers = (workers)=> workers.map(worker =>
        <li><Link key={worker.id} to={`/workers/${worker.id}`}>{worker.name}</Link></li>
    );   

    render() {
        let {match, todos} = this.props;
        let todo = todos[match.params.todoId];
        return (
                <article className = "App-header" >
                    <header><h1>Todo #{todo.id} ({todo.task})</h1></header>
                    <ul>
                        {this.renderWorkers(todo.workers)} 
                    </ul>
                    <footer><a href={`/users/${todo.created_by.id}`}>created {todo.created_at} by { todo.created_by.name }</a></footer>
                </article>
            );
    }
}