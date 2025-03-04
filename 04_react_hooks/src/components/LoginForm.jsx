import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

const LoginForm = () => {
  const { setUser } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setUser({ name: username }); // 仅存储用户名，密码不存储
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <input
        type="text"
        placeholder="请输入用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="请输入密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
};

export default LoginForm;
