import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { deleteTodo, getIdEditTodo, toggleCompleted, toggleEditTodo } from "../redux/todoSlice";

interface ItemTodoProps {
  id: number;
  title: string;
  completed: boolean;
}

const ItemTodo: FC<ItemTodoProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();
  const isEdit = useAppSelector(state => state.tasks.toggleEdit);

  const handleEditTodo = () => {
    dispatch(getIdEditTodo(id))
    dispatch(toggleEditTodo(isEdit))
  }
  
  return (
    <div style={{ border: "1px dotted yellow" }}>
      <input 
         type="checkbox" 
         onChange={() => dispatch(toggleCompleted(id))} 
         checked={completed}
      />
      <b style={{ margin: "0 8px" }}>{title}</b>
      <button onClick={handleEditTodo} style={{ color: "blue", cursor: "pointer" }}>edit</button>
      <button onClick={() => dispatch(deleteTodo(id))} style={{ color: "red", cursor: "pointer" }}>delete</button>
    </div>
  );
};

export default ItemTodo;
