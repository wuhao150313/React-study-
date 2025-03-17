import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { get, put } from "../api/request";

const PostDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(
    location.state?.isEditing || false
  );
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await get(`/posts/${id}`);
        setPost(data);
        setEditTitle(data.title);
        setEditBody(data.body);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div style={{ color: "red", padding: "1rem" }}>错误: {error}</div>;
  }

  if (!post) {
    return <div>文章未找到</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      {successMessage && (
        <div
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "1rem",
            borderRadius: "4px",
            marginBottom: "1rem",
            position: "fixed",
            top: "20px",
            right: "20px",
            zIndex: 1000,
          }}
        >
          {successMessage}
        </div>
      )}
      {!isEditing ? (
        <>
          <h1>{post.title}</h1>
          <p style={{ whiteSpace: "pre-wrap" }}>{post.body}</p>
          <button
            onClick={() => setIsEditing(true)}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginTop: "1rem",
            }}
          >
            编辑文章
          </button>
        </>
      ) : (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              await put(`/posts/${id}`, {
                title: editTitle,
                body: editBody,
              });
              setPost({ ...post, title: editTitle, body: editBody });
              setIsEditing(false);
              setSuccessMessage("文章更新成功！");
              setTimeout(() => setSuccessMessage(null), 3000);
            } catch (err) {
              setError(err.message);
            }
          }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div>
            <label htmlFor="title">标题：</label>
            <input
              type="text"
              id="title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              required
              style={{ width: "100%", padding: "0.5rem" }}
            />
          </div>
          <div>
            <label htmlFor="body">内容：</label>
            <textarea
              id="body"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              required
              style={{ width: "100%", height: "200px", padding: "0.5rem" }}
            />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              保存
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                padding: "0.5rem 1rem",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              取消
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default PostDetail;
