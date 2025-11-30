// src/components/TodoApp.js (vai līdzīgs ceļš)

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../../redux/action";

function TodoApp() {
  const [title, setTitle] = useState("");

  // useSelector aizstāj mapStateToProps, lai iegūtu state no Redux store
  const todos = useSelector((state) => state.todos);
  
  // useDispatch aizstāj mapDispatchToProps, lai iegūtu dispatch funkciju
  const dispatch = useDispatch();

  const handleAdd = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    dispatch(addTodo(trimmed)); // Izmanto dispatch, lai izsauktu darbību
    setTitle("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd();
  };

  return (
    <div>
     <h1>TodoApp</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New todo"
          aria-label="New todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
