import { useState } from "react";
import { LoginContext } from "../context/LoginContext";

// LoginProvider 组件，提供全局用户状态
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 存储当前用户信息，默认未登录

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
