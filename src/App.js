import React, { useState } from "react";

import "./App.css";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    const newTodos = [...todos, input];
    setTodos(newTodos);
    setInput("");
  };
  const removeTodo = (id) => {
    const newTodos = todos.filter((todo, index) => index !== id);

    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <div className="todo-form">
        <input
          className="todo-input"
          type="text"
          placeholder="Add a todo"
          name="text"
          value={input}
          onChange={handleChange}
        />
        <button className="todo-button" onClick={handleClick}>
          Add todo
        </button>
      </div>
      {todos.map((todo, index) => (
        <Todo key={index} value={todo} removeTodo={removeTodo} id={index} />
      ))}
    </div>
  );
}

export default App;
