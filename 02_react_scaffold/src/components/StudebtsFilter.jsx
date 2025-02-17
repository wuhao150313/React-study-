import React from "react";

class StudentsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 111, name: "张三", score: 99 },
        { id: 112, name: "张三发", score: 98 },
        { id: 113, name: "张三分", score: 91 },
        { id: 114, name: "张三放", score: 88 },
      ],
      showExcellent: true, // 当前显示的是优秀（分数 >= 90）
    };
  }

  // 切换优秀/良好的学生列表
  toggleButton = () => {
    this.setState((prevState) => ({
      showExcellent: !prevState.showExcellent,
    }));
  };

  render() {
    const { students, showExcellent } = this.state;
    const filteredStudents = students.filter((student) =>
      showExcellent ? student.score >= 90 : student.score < 90
    );

    return (
      <div style={styles.container}>
        <h2>学生列表数据</h2>
        <button onClick={this.toggleButton} style={styles.button}>
          {showExcellent ? "切换至良好" : "切换至优秀"}
        </button>
        <div style={styles.listContainer}>
          {filteredStudents.map((student) => (
            <div
              key={student.id}
              style={{
                ...styles.studentItem,
                borderColor: student.score >= 90 ? "green" : "yellow",
                backgroundColor:
                  student.score >= 90 ? "lightgreen" : "lightyellow",
              }}
            >
              <h2>学号: {student.id}</h2>
              <h3>姓名: {student.name}</h3>
              <h1>分数: {student.score}</h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default StudentsFilter;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // 让容器充满整个视口高度
    backgroundColor: "#f4f4f4",
    padding: "20px",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    marginBottom: "20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center", // 确保列表内容居中
    width: "100%",
    maxWidth: "600px", // 最大宽度 600px
    marginTop: "20px", // 上方空间
  },
  studentItem: {
    width: "100%",
    margin: "10px 0",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    border: "2px solid",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};
