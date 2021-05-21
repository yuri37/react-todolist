import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo, removeTodo, doneTodo } from '../actions'

const App = (props) => {

  const [taskValue, setTask] = useState("")
  // ""はtaskValueというステートの初期値。taskValue = "" (フォームに値は入っておらず空欄)
  // フォーム機能のための箇所。""の中に値を入れるとフォームに値が入る
  // setTaskという関数でtaskValueの値を変更する。

  const createTask = (e) => {
    // フォームの値が変更されると実行。
    setTask(e.target.value)
    // フォームに入力した値を取り出して変数としてsetTask関数に渡す。
    // setTask関数はtaskの値をフォームに入力された値に上書きする。
  }

  const addTask = () => {
    if (taskValue === '') return
    props.addTodo(taskValue)
    setTask('')
  }

  const removeTask = index => {
    props.removeTodo(index)
  }

  const doneTask = index => {
    props.doneTodo(index)
  }

  return (
    <>
      <h1>todoリスト</h1>
      <input value={ taskValue } onChange={ createTask } />
      {/* フォームに入力された値をcreateTask関数からtaskというステートで受け取る。 */}
      <button onClick={ addTask }>追加</button>
      <ul>
        {props.todos.map((todo, index) => (
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

const mapStateToProps = state => ({
   // storeが持っているstateである、todolist内のtodos配列をtodosという名前でpropsに渡す
   todos: state.todolist.todos 
})

// これでもいける
// const mapStateToProps = state => {
//   return { todos: state.todolist.todos }
// }

const mapDispatchToProps = dispatch => ({
  addTodo: (task) => dispatch(addTodo(task)),
  removeTodo: (index) => dispatch(removeTodo(index)),
  doneTodo: (index) => dispatch(doneTodo(index))
})

export default connect (mapStateToProps, mapDispatchToProps) (App);
// connectを使うことで初めてコンポーネントはstoreから必要なデータを取得したり
// 状態の更新をreduxに対して要求する（dispatch）ことができる。