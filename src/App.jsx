import { useState } from "react";
import { MdDeleteOutline, MdAdd } from "react-icons/md";

import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [item, setItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputData = {
      id: Date.now(),
      text: inputValue,
    };

    setItem([...item, inputData]);

    setInputValue("");
  };

  const handleDelete = (id) => {
    const updatedTodos = item.filter((todo) => todo.id !== id);

    setItem(updatedTodos);
  };

  return (
    <div className="app">
      <div className="main">
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add your new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button>
            <MdAdd className="icon" />
          </button>
        </form>
        <ul className="todos">
          {item.map((item) => (
            <li className="item" key={item.id}>
              <h4>{item.text}</h4>
              <button onClick={() => handleDelete(item.id)}>
                <MdDeleteOutline className="icon" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
