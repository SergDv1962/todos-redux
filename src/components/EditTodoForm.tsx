import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { Todo, editTask, toggleEditTodo } from "../redux/todoSlice";

const EditTodoForm = () => {
  const todos = useAppSelector((state) => state.tasks.list);
  const idEditTodo = useAppSelector((state) => state.tasks.idEditTodo);
  const isEdit = useAppSelector((state) => state.tasks.toggleEdit);
  const dispatch = useAppDispatch();

  const editTodo = todos?.find((todo) => todo.id === idEditTodo);

  const [text, setText] = useState<string>(editTodo ? editTodo.title : "");

  const newTodo: Todo = {
    id: idEditTodo,
    title: text,
    completed: false,

  }

  const handleSave = () => {
    dispatch(editTask(newTodo))
    dispatch(toggleEditTodo(isEdit))
  }

  return (
    <div>
      <h2>Edit your todo</h2>
      <input type="text" onChange={e=>setText(e.target.value)} value={text} />
      <button
        style={{ color: "green", cursor: "pointer" }}
        onClick={handleSave}
      >
        save
      </button>
    </div>
  );
};

export default EditTodoForm;
