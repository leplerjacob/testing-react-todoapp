import { useState } from "react";
import "./addtodo.css";

export default function AddTodo(props) {
  const [todo, setTodo] = useState("");
  const [date, setDate] = useState("");

  const addTodo = props.addTodo;

  function changeValue(e) {
    switch (e.target.name) {
      case "todo": {
        setTodo(e.target.value);
      }
      case "date": {
        setDate(e.target.value);
      }
      default: {
        return;
      }
    }
  }

  function createTodoAndSend() {
    const createdTodo = {
      id: null,
      todo: todo,
      date: date,
    };
    addTodo(createdTodo);
  }

  return (
    <form>
      <label htmlFor="todo">To Do</label>
      <input
        name="todo"
        type="text"
        id="input todo"
        value={todo}
        onChange={changeValue}
      />
      <label htmlFor="date">Date</label>
      <input
        name="date"
        type="date"
        id="input date"
        value={date}
        onChange={changeValue}
      />
      <label htmlFor="submit">Submit</label>
      <input type="button" value="Add Todo" onClick={createTodoAndSend} />
    </form>
  );
}
