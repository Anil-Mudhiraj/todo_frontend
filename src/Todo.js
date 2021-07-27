import React from "react";
import { GrClose } from "react-icons/gr";

function Todo(props) {
  const handleClick = (e) => {
    props.removeTodo(props.id);
  };

  return (
    <div id={props.id} className="todo-row" onClick={handleClick}>
      <h3>{props.value}</h3>
      <div className="icons">
        <GrClose className="delete-icon" onClick={handleClick} />
      </div>
    </div>
  );
}

export default Todo;
