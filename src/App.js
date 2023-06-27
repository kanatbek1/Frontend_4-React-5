import React, { useState, useEffect } from "react";
import "./App.css";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-title">User List</h2>
      <ul>
        {users.map((user) => (
          <li className="user-list-item" key={user.id}>
            {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
