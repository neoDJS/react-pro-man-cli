import React from 'react';
import { Link } from 'react-router-dom';

const TodosList = ({ todos }) => {
  const renderTodos = todos.map(todo =>
    <li><Link key={todo.id} to={`/todos/${todo.id}`}>{todo.task}</Link></li>
  );

  return (
    <article className = "App-header" >
        <header><h1>Todos List</h1></header>
        <ul>
            {this.renderTodos}
        </ul>
        <footer></footer>
    </article> 
  );
};

export default TodosList;
