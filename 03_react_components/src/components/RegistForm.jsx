import { useState } from "react";

const RegistForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email }); // 提交表单数据
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>姓名:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>邮箱:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <button type="submit">提交</button>
    </form>
  );
};

export default RegistForm;
