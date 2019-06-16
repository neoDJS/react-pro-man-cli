
import { Link } from 'react-router-dom';
import React, { Component } from "react";

export default class User extends Component {   
    renderTodos = (todos, match)=> todos.map(todo =>
        <li><Link key={todo.id} to={`${match.url}/todos/${todo.id}`}>{todo.task}</Link></li>
    );     

    render() {
        let {match, users} = this.props;
        let user = users[match.params.userId];
        return (
                <article className = "App-header" >
                    <header><h1>Project #{user.id} ({user.name})</h1></header>
                    <p><strong>Email:</strong>{user.email}</p>
                    <ul>
                        {this.renderTodos(user.workers, match)}                         
                    </ul>
                    <div>
                      <form id="createTodo" action={`/projects/${user.id}/todos`} method="POST">
                        <input name="todo[task]" id="todo_task"/>
                        <input type="submit" value="Add Todo" />
                      </form>
                    </div>
                    <footer><a href={`/users/${user.created_by.id}`}>created {user.created_at} by { user.created_by.name }</a></footer>
                </article>
            );
    }
}