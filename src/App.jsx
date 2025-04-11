import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import "./components/style.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAdd() {
    setTodos((prev) => {
      const updated = [
        ...prev,
        { id: Date.now(), text: task, completed: false },
      ];
      return updated;
    });
    setTask("");
  }

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  function handleEdit(id, newText) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="main-app">
      <Header />
      <div className="inside-main">
        <input
          className="input"
          type="text"
          placeholder="Enter the text.."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="button"
          onClick={() =>
            task === "" ? alert("Please Enter Text") : handleAdd()
          }
        >
          Add
        </button>
      </div>
      <TodoList
        todos={todos}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </div>
  );
}

export default App;
