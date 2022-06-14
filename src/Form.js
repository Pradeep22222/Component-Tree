import React, { useState } from "react";

export const Bill = ({ updateuser }) => {
  const [str, setStr] = useState("");
  const [user, setUser] = useState([]);
  const updateStr = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setStr(value);
  };
  const updateUser = (e) => {
    e.preventDefault();
    updateuser(str);
    setStr("");
  };
  return (
    <div>
      <form action="" onSubmit={updateUser}>
        <input type="text" onChange={updateStr} value={str} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
