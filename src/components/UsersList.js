import React from 'react';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
  const renderUsers = users.map(user =>
    <li><Link key={user.id} to={`/users/${user.id}`}>{user.name}</Link></li>
  );

  return (
    <article className = "App-header" >
        <header><h1>Users List</h1></header>
        <ul>
            {this.renderUsers}
        </ul>
        <footer></footer>
    </article> 
  );
};

export default UsersList;
