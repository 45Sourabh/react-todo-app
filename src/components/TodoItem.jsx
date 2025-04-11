import { useState } from "react";
import "./style.css";

function TodoItem(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [changedVal, setChangedVal] = useState(props.todo.text);

  function handleSave() {
    props.onEdit(props.todo.id, changedVal);
    setIsEditing(false);
  }

  return (
    <>
      <div className="todo-item">
        <input
          className="todo-input"
          checked={props.todo.completed}
          onChange={() => props.onToggle(props.todo.id)}
          type="checkbox"
        />
        {isEditing ? (
          <input
            type="text"
            className="editing-input"
            value={changedVal}
            onChange={(e) => setChangedVal(e.target.value)}
          />
        ) : (
          <span className={props.todo.completed ? "completed-task" : ""}>
            {props.todo.text}
          </span>
        )}
        {isEditing ? (
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button
          className="delete-btn"
          onClick={() => props.onDelete(props.todo.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}

export default TodoItem;
