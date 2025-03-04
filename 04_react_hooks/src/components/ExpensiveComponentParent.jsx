import { useState, useCallback } from "react";
import ExpensiveComponent from "./ExpensiveComponent";

// ExpensiveComponentParent 组件，用于展示计数器并包含一个昂贵的子组件
const ExpensiveComponentParent = () => {
  // 使用 useState Hook 创建一个名为 count 的状态变量，初始值为 0
  const [count, setCount] = useState(0);

  // 使用 useCallback Hook 创建一个 memoizedAction 函数
  // useCallback 确保在 count 未发生变化时，重复使用相同的函数实例，这有助于避免不必要的重新渲染，特别是在传递给 ExpensiveComponent 时
  const memoizedAction = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // 依赖为空
  // 渲染组件，显示当前的 count 值和一个 ExpensiveComponent 子组件
  return (
    <div>
      <p>Count: {count}</p>
      <ExpensiveComponent onAction={memoizedAction} />
    </div>
  );
};

export default ExpensiveComponentParent;
