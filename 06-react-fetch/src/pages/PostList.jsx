import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get, del } from "../api/request";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get("/posts");
        setPosts(data);
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
      <h1>文章列表</h1>
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
            <p>{post.body.substring(0, 100)}...</p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <Link to={`/post/${post.id}`}>阅读更多</Link>
              <Link
                to={`/post/${post.id}`}
                state={{ isEditing: true }}
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                编辑
              </Link>
              <button
                onClick={async () => {
                  try {
                    await del(`/posts/${post.id}`);
                    setPosts(posts.filter((p) => p.id !== post.id));
                  } catch (err) {
                    setError(err.message);
                  }
                }}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  padding: "0.5rem 1rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                删除
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
