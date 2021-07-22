import React from "react";
import "./todo.scss";

const TodoList = ({ title, id }) => {
  return (
    <div className="">
      <span>
        {id} {")"}
      </span>
      <span> {title}</span>
    </div>
  );
};

export default TodoList;
