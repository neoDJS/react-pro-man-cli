
import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Project extends Component {    
    renderTodos = (todos, match) => todos.map(todo =>
        <li><Link key={todo.id} to={`${match.url}/todos/${todo.id}`}>{todo.task}</Link></li>
    );     

    render() {
        let {match, projects} = this.props;
        let project = projects[match.params.projectId];
        return (
                <article className = "App-header" >
                    <header><h1>Project #{project.id} ({project.name})</h1></header>
                    <p><strong>Description:</strong>{project.description}</p>
                    <ul>
                        {this.renderTodos(project.todos, match)} 
                    </ul>
                    <div>
                      <form id="createTodo" action={`/projects/${project.id}/todos`} method="POST">
                        <input name="todo[task]" id="todo_task"/>
                        <input type="submit" value="Add Todo" />
                      </form>
                    </div>
                    <footer><a href={`/users/${project.created_by.id}`}>created {project.created_at} by { project.created_by.name }</a></footer>
                </article>
            );
    }
}