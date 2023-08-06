import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, []);

  return (
    <div>
      <ul className="users">
        {users.map((user) => (
          <div key={user.id}>
            <i
              class="fa-sharp fa-solid fa-user fa-beat"
              style={{ color: "#e6eae6" }}
            ></i>
            <li>{user.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
