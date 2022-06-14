import React from "react";
export const List = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
