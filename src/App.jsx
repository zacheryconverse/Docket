import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./styles.css";

const MAX_TODO_LENGTH = 40;

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length > MAX_TODO_LENGTH) {
      setError(`Todo cannot exceed ${MAX_TODO_LENGTH} characters`);
    } else {
      setText(newValue);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError("Please enter a valid todo");
      return;
    }
    const newTodos = [...todos, { id: uuid(), text: text.trim() }];
    setTodos(newTodos);
    setText("");
    setError("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <form onSubmit={handleSubmit} className="todo-form">
        <label htmlFor="add-todo-input" className="todo-label">
          Add a new todo
        </label>
        <input
          id="add-todo-input"
          className={`todo-input-field ${error ? "input-error" : ""}`}
          type="text"
          placeholder="Enter your todo here"
          value={text}
          onChange={handleChange}
        />
        {error && <span className="error-message">{error}</span>}
        <button type="submit" className="todo-submit">
          Add
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input type="checkbox" className="todo-checkbox" />
            <span className={"todo-text"}>{todo.text}</span>
            <button
              onClick={() => handleDelete(todo.id)}
              className="todo-button"
              aria-label={`Delete todo: ${todo.text}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
