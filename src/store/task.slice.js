import { createSlice } from "@reduxjs/toolkit";
import { insertTask, getTasks } from "../db";
import Task from "../models/task";

const initialState = {tasks: []};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = new Task(
        action.payload.id.toString(),
        action.payload.title,
      );
      state.tasks.push(newTask);
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, setTasks } = taskSlice.actions;

export const saveTask = (title) => {
  return async (dispatch) => {
    try {
      const result = await insertTask(title);
      dispatch(addTask({ id: result.insertId, title}));
    } catch (error) {
      console.log("error", error);
      throw error;
    }
  };
};

export const loadTasks = () => {
  return async (dispatch) => {
    try {
      const result = await getTasks();
      dispatch(setTasks(result?.rows?._array));
    } catch (error) {
      console.warn(error);
      throw error;
    }
  };
};

export default taskSlice.reducer;
