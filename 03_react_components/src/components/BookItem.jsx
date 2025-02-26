import { Card, Button } from "antd";

function BookItem({ book, deleteBook, selectBook }) {
  return (
    <Card title={book.title}>
      <p>作者: {book.author}</p>
      <p>出版年份: {book.year}</p>
      <Button
        type="primary"
        onClick={() => selectBook(book)}
        style={{ marginRight: "10px" }}
      >
        查看详情
      </Button>
      <Button type="danger" onClick={() => deleteBook(book.id)}>
        删除
      </Button>
    </Card>
  );
}

export default BookItem;
