import React, { useEffect, useRef } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodos from "./components/ListTodos";
import { useAppSelector } from "./hook";
import EditTodoForm from "./components/EditTodoForm";

function App() {
  const isEdit = useAppSelector(state => state.tasks.toggleEdit);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(inputRef.current) inputRef.current.focus();
  }, [])

  return (
    <div className="App">
      <div className="App-header">
       {isEdit 
        ? <EditTodoForm/>
        : <>
            <AddTodo inputRef={inputRef}/>
            <ListTodos/>
          </>
       } 
       
      </div>
    </div>
  );
}

export default App;
