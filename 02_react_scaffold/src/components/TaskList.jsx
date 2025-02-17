import React from "react";

class TaskList extends React.Component {
  render() {
    const taskList = [
      {
        id: 1,
        name: "吃饭",
        completed: true,
      },
      {
        id: 2,
        name: "睡觉",
        completed: false,
      },
      {
        id: 3,
        name: "敲代码",
        completed: false,
      },
    ];

    const incompleteTasks = taskList.filter((task) => !task.completed).length;

    return (
      <div>
        <h2>任务列表</h2>
        <p>当前完成的任务数: {incompleteTasks}</p>
        <div className="task-list">
          {taskList.map((task) => {
            return (
              <div
                key={task.id}
                style={{
                  color: task.completed ? "green" : "red",
                }}
              >
                <h3>{task.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;
