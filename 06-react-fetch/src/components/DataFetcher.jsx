// 导入必要的React hooks
import { useState, useEffect } from "react";

// 创建DataFetcher组件
const DataFetcher = () => {
  // 使用useState定义状态来存储获取的数据
  const [posts, setPosts] = useState([]);
  // 使用useState定义状态来存储加载状态
  const [loading, setLoading] = useState(true);
  // 使用useState定义状态来存储错误信息
  const [error, setError] = useState(null);

  // 使用useEffect在组件挂载时获取数据
  useEffect(() => {
    // 定义异步函数来获取数据
    const fetchData = async () => {
      try {
        // 发起GET请求获取数据
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        // 检查响应状态
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 将响应数据转换为JSON格式
        const data = await response.json();
        // 更新状态，存储获取的数据
        setPosts(data);
        // 设置加载状态为false
        setLoading(false);
      } catch (err) {
        // 如果发生错误，更新错误状态
        setError(err.message);
        // 设置加载状态为false
        setLoading(false);
      }
    };

    // 调用获取数据的函数
    fetchData();
  }, []); // 空依赖数组表示仅在组件挂载时执行一次

  // 如果正在加载，显示加载信息
  if (loading) {
    return <div>Loading...</div>;
  }

  // 如果有错误，显示错误信息
  if (error) {
    return <div>Error: {error}</div>;
  }

  // 渲染获取的数据
  return (
    <div>
      <h1>Posts</h1>
      <div style={{ display: "grid", gap: "1rem" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ddd",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;
