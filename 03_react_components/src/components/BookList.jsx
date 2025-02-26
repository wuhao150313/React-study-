import { List, Button, Card } from "antd";

function BookList({ books, deleteBook, selectBook }) {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={books}
      renderItem={(book) => (
        <List.Item>
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
        </List.Item>
      )}
    />
  );
}

export default BookList;
