import React, { FC, KeyboardEventHandler, useState } from "react";
import { useAppDispatch } from "../hook";
import { addTodo } from "../redux/todoSlice";

interface AddTodoProps {
  inputRef: any
}

const AddTodo:FC<AddTodoProps> = ({ inputRef }) => {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
   if(text.trim().length === 0) return;
   dispatch(addTodo(text));
   setText('');
  }
  
  const handleEnter: KeyboardEventHandler<HTMLInputElement> = (e) => {
   if(e.key === 'Enter') handleAddTodo()
  }
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleEnter}
        value={text}
        ref={inputRef}
      />
      <button onClick={handleAddTodo}>add</button>
    </div>
  );
};

export default AddTodo;
