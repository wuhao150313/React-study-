import React from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";

const BlogList = () => {
  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <Link to={`/blog/${index}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
