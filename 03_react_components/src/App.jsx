// import WelcomeClass from "./components/WelcomeClass";

// import Main from "./components/Main";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import Button from "./components/Button";
// import Card from "./components/Card";

// import RegistPage from "./components/RegistPage"; // 引入父组件

// const App = () => {
//   const handleClick = () => {
//     alert("点击了按钮！");
//   };
//   return (
//     <>
//       <Header />
//       <Main />
//       <Footer />
//       <Card
//         header={<h2>标题1</h2>}
//         body={<p>内容1</p>}
//         footer={<button onClick={handleClick}>按钮1</button>}
//       />
//     </>
//     <div>
//       <h1>用户注册</h1>
//       <RegistPage />
//     </div>
//   );
// };

// export default App;

import { useState } from "react";
import BookInput from "./components/BookInput";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import { Layout, Typography } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  // 初始化一些图书数据
  const initialBooks = [
    {
      id: 1,
      title: "JavaScript 高级程序设计",
      author: "Nicholas C. Zakas",
      year: 2015,
    },
    { id: 2, title: "React 进阶", author: "Dan Abramov", year: 2019 },
    { id: 3, title: "深入浅出 Node.js", author: "朴灵", year: 2018 },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState(null);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const deleteBook = (bookId) => {
    setBooks(books.filter((book) => book.id !== bookId));
  };

  const selectBook = (book) => {
    setSelectedBook(book);
  };

  const editBook = (updatedBook) => {
    setBooks(
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <Title level={2} style={{ color: "white" }}>
          图书管理系统
        </Title>
      </Header>
      <Content className="content">
        <BookInput addBook={addBook} />
        <BookList
          books={books}
          deleteBook={deleteBook}
          selectBook={selectBook}
        />
        {selectedBook && <BookDetail book={selectedBook} editBook={editBook} />}
      </Content>
    </Layout>
  );
}

export default App;
