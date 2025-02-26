import { useState } from "react";

const Random = () => {
  const names = ["CHATGPT ", "DEEPSEEK", "KIMI", "tongyi", "doubao"];
  const { name, sestName } = useState("");
  const { name, sestName } = useState(0);

  const generateName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    sestName(names[randomIndex]);
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{name || "点击生成随机名字"}</h1>
      <button onClick={generateName}>点击生成随机名字 </button>
      <p> 已生成次数： {count}</p>
    </div>
  );
};

export default Random;
