import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, doneTodo } from '../actions';
import About from "./About"
import Home from "./Home"
import Users from "./Users"
import Error from "./Error"
import Topics from "./Topics"
import Navi from "./Navi"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  useParams
} from 'react-router-dom';


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
    <Router>
      <>
        
        {/* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about/100'>About</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            <li>
              <Link to='/id/777'>ID</Link>
            </li>
          </ul>
        </nav> */}

        <Navi />
        
        <Switch>
          <Route path='/about/:aboutId' exact component={About} />
          <Route path='/users' exact component={Users} />
          <Route path='/id/:id' exact><Id /></Route>
          <Route path='/topics'><Topics /></Route>
          <Route path='/' exact component={Home} />
          <Route component={Error} />
        </Switch>

        
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
    </Router>
  )
}

const Id = () => {
  const { id } = useParams();
  return <h2>ID: { id }</h2>
}

export default App