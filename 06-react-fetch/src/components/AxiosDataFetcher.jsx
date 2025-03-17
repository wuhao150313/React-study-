// 导入必要的React hooks
import { useState, useEffect } from "react";
// 导入axios库用于发送HTTP请求
import axios from "axios";

// 创建AxiosDataFetcher组件
const AxiosDataFetcher = () => {
  // 使用useState定义状态来存储获取的数据
  const [posts, setPosts] = useState([]);
  // 使用useState定义状态来存储加载状态
  const [loading, setLoading] = useState(true);
  // 使用useState定义状态来存储错误信息
  const [error, setError] = useState(null);

  useEffect(() => {
    // 定义异步函数来获取数据
    const fetchData = async () => {
      try {
        // 使用axios发送GET请求获取数据
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: 5, // 限制获取5条数据
            },
          }
        );

        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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

export default AxiosDataFetcher;
