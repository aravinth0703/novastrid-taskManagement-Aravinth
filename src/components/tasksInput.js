import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/taskSlice";

const TaskInput = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const dispatch = useDispatch();

  const addTaskHandler = () => {
    dispatch(
      addTask({
        id: Date.now,
        title: taskTitle,
        completed: false,
      })
    );
    setTaskTitle("");
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Enter the Task name"
      />
      <button onClick={addTaskHandler}>Add Task</button>
    </div>
  );
};

export default TaskInput;
