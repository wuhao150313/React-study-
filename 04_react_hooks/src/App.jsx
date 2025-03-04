// import React, { useState, useEffect, useDebugValue } from "react";
import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import ToDoList from "./components/ToDoList";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import ShowTime from "./components/ShowTime";
import Weather from "./components/Weather";
import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import LoginProvider from "./components/LoginProvider";
import LoginForm from "./components/LoginForm";
import LoginButton from "./components/LoginButton";
import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import ListFilter from "./components/ListFilter";
import ListFilterParent from "./components/ListFilterParent";
import Child from "./components/Child";
import Parent from "./components/Parent";
import ExpensiveComponent from "./components/ExpensiveComponent";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import FocusInput from "./components/FocusInput";
import PreviousValue from "./components/PreviousValue";
import Child1 from "./components/Child1";
import Parent1 from "./components/Parent1";
import Counter2 from "./components/Counter2";
import Parent2 from "./components/Parent2";
import ComponentSize from "./components/ComponentSize";
import AnimateBox from "./components/AnimateBox";
import Data from "./components/Data";
import Search from "./components/Search";

// function useCustomHook(value) {
//   useDebugValue(value ? "Active" : "Inactive");
//   return value;
// }

// function useApi(url) {
//   const [data, setData] = useState(null);
//   useDebugValue(data ? "Data Loaded" : "Loading");
//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => setData(json.data));
//   }, [url]);
//   return data;
// }

const App = () => {
  //   const [isActive, setIsActive] = useState(false);
  //   useCustomHook(isActive);

  // const data = useApi("https://api.xygeng.cn/one");
  // if (!data) return <p>加载中...</p>;

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <div>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <ToDoList /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <ShowTime /> */}
      {/* <Weather /> */}
      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}
      {/* <LoginProvider>
        <div style={{ textAlign: "center" }}>
          <h1>登陆系统</h1>
          <LoginForm />
          <LoginButton />
        </div>
      </LoginProvider> */}

      {/* <h1>计算示例</h1>
      <ExpensiveCalculationParent /> */}

      {/* <h1>列表过滤示例</h1>
      <ListFilterParent /> */}

      {/* <h1>事件处理示例</h1>
      <Parent /> */}

      {/* <h1>预防不必要函数重渲染示例</h1>
      <ExpensiveComponentParent /> */}

      {/* <h1>获取DOM元素</h1>
      <FocusInput /> */}

      {/* <h1>保存上一个值</h1>
      <PreviousValue /> */}

      {/* <h1>父组件控制子组件的方法</h1>
      <Parent1 /> */}

      {/* <h1>暴露自定义方法</h1>
      <Parent2 /> */}

      {/* <h1>获取元素尺寸</h1>
      <ComponentSize /> */}

      {/* <h1>动画同步</h1>
      <AnimateBox /> */}

      {/* <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate" : "Activate"}
      </button> */}

      {/* <h2>{data.content}</h2>
      <p>来源：{data.origin}</p>
      <p>作者：{data.name}</p>
      <p>标签：{data.tag}</p> */}
      {/* <Data /> */}
      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
    </div>
  );
};

export default App;
