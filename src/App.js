import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import { Bill } from "./Form";
import { List } from "./List";
function App() {
  const [users, setUsers] = useState([]);
  const updateUsers = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <Bill updateuser={updateUsers}></Bill>
      <List users={users}></List>
    </div>
  );
}
export default App;
