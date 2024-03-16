import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Redux/ToDoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
