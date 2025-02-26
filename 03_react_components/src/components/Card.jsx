import "./Card.css"; // 引入CSS文件

const Card = ({ header, body, footer }) => {
  return (
    <div className="card">
      <div className="header">{header}</div>
      <div className="body">{body}</div>
      <div className="footer">{footer}</div>
    </div>
  );
};

export default Card;
