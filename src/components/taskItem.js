import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../store/taskSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className="task-item">
      <li key={task.id}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
        />
        {task.title}
        <button onClick={handleDelete}>Delete</button>
      </li>
    </div>
  );
};

export default TaskItem;
