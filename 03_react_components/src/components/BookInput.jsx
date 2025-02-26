import { useState } from "react";
import { Input, Button, Form } from "antd";

function BookInput({ addBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  const handleAddBook = () => {
    const newBook = {
      id: Date.now(),
      title,
      author,
      year,
    };
    addBook(newBook);
    setTitle("");
    setAuthor("");
    setYear("");
  };

  return (
    <div className="book-input">
      <Form layout="inline">
        <Form.Item label="书名">
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="请输入书名"
          />
        </Form.Item>
        <Form.Item label="作者">
          <Input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="请输入作者"
          />
        </Form.Item>
        <Form.Item label="出版年份">
          <Input
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="请输入出版年份"
            type="number"
          />
        </Form.Item>
        <Button type="primary" onClick={handleAddBook}>
          添加图书
        </Button>
      </Form>
    </div>
  );
}

export default BookInput;
