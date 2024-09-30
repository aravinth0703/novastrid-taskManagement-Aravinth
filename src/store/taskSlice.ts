import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface Taskstate {
  tasks: Task[];
}

const initialState: Taskstate = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTask(state, action: PayloadAction<number>) {
      const task = state.tasks.find((task) => task.id == action.payload);
      if (task) task.completed = !task.completed;
    },
  },
});

export const { setTasks, addTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;
