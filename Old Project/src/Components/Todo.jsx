import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo, removeAllTodos } from "../Redux/ToDoSlice";
import './Todo.css'

const Todo = () => {
  const [inputdata, setInputData] = useState("");
  const [editId, setEditId] = useState(null);
  const list = useSelector((state) => state.todo.list);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    const data = list.find((ele) => ele.id === id).text;
    setInputData(data);
    setEditId(id);
  };

  const handleAdd = () => {
    if (inputdata.trim() === "") {
      alert("Please fill the correct data");
      return;
    }
    if (editId !== null) {
      dispatch(editTodo({ id: editId, text: inputdata }));
      setEditId(null);
    } else {
      dispatch(addTodo(inputdata));
      setInputData("");
    }
  };

  return (
    <>
      <div className="TODOH">
        <h1 className="TDH">To-Do List Using Redux Toolkit</h1>
      </div>
      <div className="TODOI">
        <input
          type='text'
          placeholder='Add To-Do'
          value={inputdata}
          className="INP"
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={handleAdd} className="BTNA BTN AA">Add</button>
      </div>
      <div className="TODOL">
        {list.map((ele) => (
          <div key={ele.id} className="TODOL1">
            <p>{ele.text}</p>
            <button className="BTN ONE" onClick={() => dispatch(deleteTodo(ele.id))}>X</button>
            <button className="BTN TWO" onClick={() => handleEdit(ele.id)}>E</button>
          </div>
        ))}
      </div>
      <div className="BTNBX">
        <button className="BTN THR" onClick={() => dispatch(removeAllTodos())}>Clear</button>
      </div>
    </>
  );
}

export default Todo;