import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.xygeng.cn/one")
      .then((response) => {
        if (!response.ok) {
          throw new Error("请求错误");
        }

        return response.json();
      })
      .then((json) => {
        if (json.code === 200 && json.data) {
          setData(json.data);
        } else {
          setError(json.error || "获取失败");
        }
      });
  }, []); //空依赖数组，这个effect旨在组件挂载时执行一次

  if (error) return <p>{error}</p>;
  if (!data) return <p>加载中...</p>;

  //渲染数据
  return (
    <div>
      <h2>
        <p>来源：{data.origin}</p>
        <p>名字：{data.name}</p>
        <p>标签：{data.tag}</p>
        <p>内容：{data.content}</p>
      </h2>
    </div>
  );
};

export default FetchData;
