import React from "react";
import TaskItem from "./taskItem";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
