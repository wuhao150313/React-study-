import { useMemo } from "react";

// ExpensiveCalculation 组件，用于执行一个计算密集型的操作
// 这个组件接收一个名为 number 的 prop，并返回该数字乘以 2 的结果
const ExpensiveCalculation = ({ number }) => {
  // 使用 useMemo Hook 来缓存计算结果，useMemo 会在其依赖项（这里是 number）发生变化时才重新计算
  const result = useMemo(() => {
    console.log("Calculating..."); // 打印日志，表明计算正在进行
    return number * 2; // 执行计算并返回结果
  }, [number]); // 依赖数组，当 number 发生变化时重新计算

  // 渲染组件，显示计算结果
  return <div>{result}</div>;
};

export default ExpensiveCalculation;
