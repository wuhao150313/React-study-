import React, { useState, useEffect } from "react";
import { getMovies } from "../api/movie";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getMovies(10);
        setMovies(data.newslist);
        setTotalPages(Math.ceil(data.newslist.length / 8));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [currentPage]);

  // 处理页面变化
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    setLoading(true);
  };

  if (loading) {
    return <div>加载中...</div>;
  }

  if (error) {
    return <div style={{ color: "red", padding: "1rem" }}>错误: {error}</div>;
  }

  // 计算当前页面应该显示的电影列表
  const startIndex = (currentPage - 1) * 8;
  const endIndex = startIndex + 8;
  const currentMovies = movies.slice(startIndex, endIndex);

  return (
    <div
      style={{
        padding: "2rem",
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))",
        backdropFilter: "blur(10px)",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#333",
          textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        电影列表
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          padding: "1rem",
        }}
      >
        {currentMovies.map((movie) => (
          <div
            key={movie.id}
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "15px",
              padding: "1.5rem",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              transition: "all 0.3s ease",
              cursor: "pointer",
              transform: "scale(1)",
              ":hover": {
                transform: "scale(1.02)",
                boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.25)",
              },
            }}
          >
            <img
              src={movie.picUrl}
              alt={movie.title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "1rem",
                boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              }}
            />
            <h3
              style={{
                marginBottom: "1rem",
                color: "#333",
                fontSize: "1.5rem",
              }}
            >
              {movie.title}
            </h3>
            <p
              style={{
                color: "#666",
                marginBottom: "0.5rem",
                lineHeight: "1.6",
              }}
            >
              {movie.description}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
                padding: "0.5rem 0",
                borderTop: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span style={{ color: "#666", fontSize: "0.9rem" }}>
                {movie.source}
              </span>
              <span style={{ color: "#666", fontSize: "0.9rem" }}>
                {movie.ctime}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 分页控制 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            background:
              currentPage === 1
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.1)",
            color: currentPage === 1 ? "#999" : "#333",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            backdropFilter: "blur(5px)",
            boxShadow: "0 2px 8px rgba(31, 38, 135, 0.37)",
          }}
        >
          上一页
        </button>

        <span style={{ color: "#333", margin: "0 1rem" }}>
          {currentPage} / {totalPages}
        </span>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
            background:
              currentPage === totalPages
                ? "rgba(255, 255, 255, 0.05)"
                : "rgba(255, 255, 255, 0.1)",
            color: currentPage === totalPages ? "#999" : "#333",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            backdropFilter: "blur(5px)",
            boxShadow: "0 2px 8px rgba(31, 38, 135, 0.37)",
          }}
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default MovieList;
