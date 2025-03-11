import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/user";

const Login = ({ setIsLoggedIn, setUsername }) => {
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("输入的用户名:", inputUsername);
    console.log("输入的密码:", password);
    console.log("当前 users 数组:", users);

    const user = users.find(
      (user) => user.username === inputUsername && user.password === password
    );

    if (user) {
      console.log("✅ 登录成功:", user);
      localStorage.setItem("loggedInUser", inputUsername);
      setIsLoggedIn(true);
      setUsername(inputUsername);
      navigate("/dashboard", { state: { username: inputUsername, age: 30 } });
    } else {
      console.log("❌ 登录失败，用户名或密码错误");
      setError("登录信息错误");
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>登陆页面</h2>
        <div style={styles.inputGroup}>
          <label style={styles.label}>用户名:</label>
          <input
            type="text"
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>密码:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          登录
        </button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  form: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#ff8c00" /* 淡橙色 */,
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  error: {
    color: "red",
    textAlign: "center",
  },
};

export default Login;
