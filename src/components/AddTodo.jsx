import { useState } from "react";
import classes from "./AddTodo.module.css";

const AddTodo = () => {
  /**
   * Rules for hooks
   use
   functional
   cannot be used after return

   Created a component

   Two way data binding

   callback within a setstate - used the hook useState

   use case of css modules

   installed and configured tailwindcss
   */
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); // [todo1, todo2, todo3, ...

  const handleInputChange = (event) => {
    setTodo(event.target.value);
  };

  const handleAddTodo = () => {
    // setTodos(todo);
    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo("");
  };

  return (
    <div className={classes.wrapper}>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={todo}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <li
              key={index}
              className="text-3xl font-bold underline text-red-300"
            >
              {todo}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AddTodo;
