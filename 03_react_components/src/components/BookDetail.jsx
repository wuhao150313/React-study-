import { useState } from "react";
import { Card, Input, Button, Form } from "antd";

function BookDetail({ book, editBook }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(book.title);
  const [newAuthor, setNewAuthor] = useState(book.author);
  const [newYear, setNewYear] = useState(book.year);

  const handleSave = () => {
    const updatedBook = {
      ...book,
      title: newTitle,
      author: newAuthor,
      year: newYear,
    };
    editBook(updatedBook);
    setIsEditing(false);
  };

  return (
    <Card title={isEditing ? "编辑图书" : "图书详情"} className="book-detail">
      <Form layout="vertical">
        <Form.Item label="书名">
          {isEditing ? (
            <Input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              placeholder="编辑书名"
            />
          ) : (
            <p>{book.title}</p>
          )}
        </Form.Item>
        <Form.Item label="作者">
          {isEditing ? (
            <Input
              value={newAuthor}
              onChange={(e) => setNewAuthor(e.target.value)}
              placeholder="编辑作者"
            />
          ) : (
            <p>{book.author}</p>
          )}
        </Form.Item>
        <Form.Item label="出版年份">
          {isEditing ? (
            <Input
              type="number"
              value={newYear}
              onChange={(e) => setNewYear(e.target.value)}
              placeholder="编辑出版年份"
            />
          ) : (
            <p>{book.year}</p>
          )}
        </Form.Item>
        {isEditing ? (
          <Button type="primary" onClick={handleSave}>
            保存
          </Button>
        ) : (
          <Button type="default" onClick={() => setIsEditing(true)}>
            编辑
          </Button>
        )}
      </Form>
    </Card>
  );
}

export default BookDetail;
