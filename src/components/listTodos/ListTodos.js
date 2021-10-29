import React from "react";

function ListTodos(props) {
  let list = props.todos;

  return (
    <div>
      <ul>
        {list.map((item) => {
          return <li key={item.id}>{item.todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default ListTodos;
