import { useState } from "react";

const TextInput = () => {
  const [inputvalue, setInputValue] = useState("abc");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <input type="text" value={inputvalue} onChange={handleChange}></input>
      <div>当前输入的内容：{inputvalue}</div>
    </div>
  );
};

export default TextInput;
