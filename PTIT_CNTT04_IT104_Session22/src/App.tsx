import React from 'react'
import ToDoList from './components/TodoList/ToDoList'
import TodoList2 from './components/TodoList2/TodoList2'

export default function App() {
  return (
    <div>
      <ToDoList></ToDoList>
      <div className='mb-6'></div>
      <TodoList2></TodoList2>
    </div>
  )
}
