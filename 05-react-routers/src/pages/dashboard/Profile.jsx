import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../app.css"; // 确保样式文件正确引入

const Profile = () => {
  return (
    <div className="profile-container">
      {/* 左侧导航栏 */}
      <nav className="profile-sidebar">
        <NavLink to="fans" className="profile-link">
          我的粉丝
        </NavLink>
        <NavLink to="follow" className="profile-link">
          我的关注
        </NavLink>
      </nav>

      {/* 右侧内容区域 */}
      <div className="profile-content">
        <Outlet /> {/* 渲染 Fans 或 Follow 页面 */}
      </div>
    </div>
  );
};

export default Profile;
