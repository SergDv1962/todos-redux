import React from 'react'
import { useAppSelector } from '../hook'
import ItemTodo from './ItemTodo'

const ListTodos = () => {
  const todos = useAppSelector(state => state.tasks.list)

  return (
    <div>
      <h3>Your list of todos has {todos.length} todos</h3>
      {todos.map(todo => <ItemTodo key={todo.id} {...todo}/>)}
    </div>
  )
}

export default ListTodos
