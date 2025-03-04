import { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //事项加入数组
  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  //定位已完成事项
  const toggleComplete = (index) => {
    const newTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAddTodo}>添加</button>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleComplete(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
