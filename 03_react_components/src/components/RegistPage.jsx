import { useState } from "react";
import RegistForm from "./RegistForm"; // 引入子组件

const RegistPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (data) => {
    setName(data.name);
    setEmail(data.email);
    setIsSubmitted(true);
    alert("提交成功！"); // 弹出成功提示框
  };

  return (
    <div>
      <RegistForm onSubmit={handleSubmit} />
      {isSubmitted && (
        <div style={{ marginTop: "20px" }}>
          <p style={{ color: "green" }}>提交成功！</p>
          <p>姓名: {name}</p>
          <p>邮箱: {email}</p>
        </div>
      )}
    </div>
  );
};

export default RegistPage;
