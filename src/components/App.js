import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, doneTodo } from '../actions'

const App = () => {

  const dispatch = useDispatch();

  const todos  = useSelector(state => state.todolist.todos);

  const [taskValue, setTask] = useState("")

  const createTask = (e) => {
    setTask(e.target.value)
  }

  const addTask = () => {
    if (taskValue === '') return
    dispatch(addTodo(taskValue))
    setTask('')
  }

  const removeTask = index => {
    dispatch(removeTodo(index))
  }

  const doneTask = index => {
    dispatch(doneTodo(index))
  }

  return (
    <>
      <h1>todoリスト</h1>
      <input value={ taskValue } onChange={ createTask } />
      
      <button onClick={ addTask }>追加</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.flg ? <del>{ todo.title }</del> : <span>{ todo.title }</span>}
            {todo.flg ? <button onClick={() => doneTask(index)}>未了</button> : <button onClick={() => doneTask(index)}>完了</button>}
            <button onClick={() => removeTask(index)}>削除</button>
          </li>
        ))}
      </ul>
    </>
  )

}

export default App