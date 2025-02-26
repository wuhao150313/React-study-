import { Button } from "antd";

const buttonStyle = {
  backgroundColor: "#ffcc00", // 橙色背景
  borderColor: "#ffcc00", // 橙色边框
  borderRadius: "10px", // 圆角
  margin: "0 10px", // 水平间距
};

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: "#d9f7be", // 设置淡绿色背景
        padding: "10px", // 给 header 添加一些内边距
      }}
    >
      <Button style={buttonStyle}>首页</Button>
      <Button style={buttonStyle}>邮件</Button>
      <Button style={buttonStyle}>设置</Button>
    </div>
  );
};

export default Header;
