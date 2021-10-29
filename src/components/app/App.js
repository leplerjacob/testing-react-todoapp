import React, { useState } from "react";
import "./App.css";
import AddTodo from "../addTodo/AddTodo";

const initialTodos = [
  { id: 1, todo: "Walk the dog", date: "2021-10-20" },
  { id: 2, todo: "Visit grandparents", date: "2021-10-22" },
  { id: 3, todo: "Attend React conference", date: "2021-10-26" },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(todo) {
    setTodos([...initialTodos, todo])
  }

  return (
    <div className="App">
      <h1 className="header welcome">Todo Application</h1>
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
