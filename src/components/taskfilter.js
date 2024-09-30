import React from "react";

const TaskFilter = ({ filter, setFilter }) => {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
};

export default TaskFilter;
