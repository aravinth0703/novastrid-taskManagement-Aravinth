import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTasks } from "./store/taskSlice";

import TaskInput from "./components/tasksInput";
import TaskList from "./components/tasksList";

import "./App.css";
import TaskFilter from "./components/taskfilter";

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("./tasks.json");
        const data = await response.json();
        dispatch(setTasks(data));
      } catch (error) {
        console.error("Error Fetching tasks:", error);
      }
    };
    fetchTasks();
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Tasks-List Management</h1>
      <TaskInput />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
