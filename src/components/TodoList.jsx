import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
        />
      ))}
    </>
  );
}

export default TodoList;
