import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const LoginButton = () => {
  const { user, setUser } = useContext(LoginContext);

  if (!user) return null; // 未登录则不显示

  return (
    <div style={{ textAlign: "center", marginTop: "10px" }}>
      <p>当前用户：{user.name}</p>
      <button onClick={() => setUser(null)}>登出</button>
    </div>
  );
};

export default LoginButton;
