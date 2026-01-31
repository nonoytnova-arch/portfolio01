{/*function Todo() {
  return (
    <div className="main">
      <h2>📝 Todo App</h2>
      <p>Todo functionality will be added here.</p>
    </div>
  );
}

export default Todo;*/}
{/*import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <>
      
      <style>
        {`
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f0f2f5;
          }

          .todo-container {
            width: 300px;
            margin: 50px auto;
            padding: 20px;
            background: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }

          .todo-container h2 {
            text-align: center;
          }

          .input-box {
            display: flex;
            gap: 10px;
          }

          .input-box input {
            flex: 1;
            padding: 8px;
            font-size: 14px;
          }

          .input-box button {
            padding: 8px 12px;
            background: #007bff;
            color: white;
            border: none;
            cursor: pointer;
          }

          .input-box button:hover {
            background: #0056b3;
          }

          ul {
            list-style: none;
            padding: 0;
            margin-top: 15px;
          }

          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: #f4f4f4;
            padding: 8px;
            margin-bottom: 8px;
            border-radius: 4px;
          }

          li button {
            background: transparent;
            border: none;
            cursor: pointer;
            font-size: 16px;
          }
        `}
      </style>

      <div className="todo-container">
        <h2>Todo List</h2>

        <div className="input-box">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </div>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;*/}
import { useState } from "react";
import "../index.css";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      <div className="input-box">
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;


