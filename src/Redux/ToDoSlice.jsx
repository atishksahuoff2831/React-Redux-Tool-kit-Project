import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
      };
      state.list.push(todo);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.list.find((t) => t.id === id);
      if (todo) {
        todo.text = text;
      }
    },
    deleteTodo: (state, action) => {
      state.list = state.list.filter((t) => t.id !== action.payload);
    },
    removeAllTodos: (state) => {
      state.list = [];
    },
  },
});

export const { addTodo, editTodo, deleteTodo, removeAllTodos } = todoSlice.actions;

export default todoSlice.reducer;