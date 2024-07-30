import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Todo = {
   id: number;
   title: string,
   completed: boolean,
}

export type TodoState = {
   list: Todo[];
   toggleEdit: boolean;
   idEditTodo: number;
}

const initialState: TodoState = {
   list: [],
   toggleEdit: false,
   idEditTodo: 0,
}

const todoSlice = createSlice({
   name: 'tasks',
   initialState,
   reducers: {
      addTodo (state, action: PayloadAction<string>){
         state.list.push({
            id: Number(Date.now()),
            title: action.payload,
            completed: false,
         })
      },
      toggleCompleted (state, action: PayloadAction<number>) {
         const toggleTodo = state.list.find(todo => todo.id === action.payload)
         if(toggleTodo) {
            toggleTodo.completed = !toggleTodo.completed;
         }
      },
      deleteTodo (state, action: PayloadAction<number>) {
         state.list = state.list.filter(todo => todo.id !== action.payload)
      }, 
      toggleEditTodo (state, action: PayloadAction<boolean>) {
         state.toggleEdit = !action.payload
      },
      getIdEditTodo (state, action: PayloadAction<number>) {
         state.idEditTodo = action.payload
      },
      editTask (state, action: PayloadAction<Todo>) {
         state.list = state.list.map(todo => todo.id !== action.payload.id ? todo : action.payload)
      }
         
   },
});

export const { addTodo, toggleCompleted, deleteTodo, toggleEditTodo, getIdEditTodo, editTask } = todoSlice.actions;

export default todoSlice.reducer;