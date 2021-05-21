import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // todolist = [
  //   { title: '概要作成', flg: false },
  //   { title: '画面設計作成', flg: false },
  //   { title: '詳細設計作成', flg: false },
  //   { title: 'コーディング', flg: false },
  //   { title: 'テスト', flg: false }
  // ]
  
  constructor(props) {
    super(props)
    this.state = {
      // todos: this.todolist,
      todos: [{ title: '概要作成', flg: false }],
      task: '',
    }
  }

  createTask(e){
    // createTask関数はフォームの値が変更されると発動。
    this.setState({ task: e.target.value })
    // フォームに入力した値を取り出して変数としてsetTask関数に渡す。
    // setTask関数はtaskの値をフォームに入力された値に上書きする。
  }

  addTask() {
    // 追加ボタンを押されると実行
  
    if (this.state.task === '') return
    // taskが空ならreturnする
  
    // setTodos(todoss => [...todoss, { title: task, flg: false }])
    this.setState({
      todos: [...this.state.todos, { title: this.state.task, flg: false }]})
    // [...todos]スプレッド構文を使い、配列のデータを展開してあげる。
    // ↑ これは、元々のtodosの配列の内容＋新しく追加する内容で新しい配列を作成している。
    // 現在のtodosと新しいタスクを合体して新しいtodosを作る。
    // setTodosに代入されて初めてtodos配列を上書き)

    this.setState({ task: '' })
    // 入力フォームを空にする

    console.log(this.state.todolist)
    console.log(this.state.todos)
    // todos配列:現時点で画面に見えているタスクが「配列の中にオブジェクト」の形で入っている
    // 新しく追加したタスクは入っていない
    console.log(this.state.task)
    // フォームに入力した値が取り出せる
  }

  removeTask(index) {
    const newTodos = [...this.state.todos]
    // 削除後の配列を定義(todos配列をコピー)
    newTodos.splice(index, 1)
    // ボタンが押された箇所の配列を削除
    this.setState({ todos: newTodos })
    // setTodosに削除後の配列を渡す
  }

  completeTask(index) {
    const doneTodos = [...this.state.todos]
    // console.log(doneTodos)
    doneTodos[index].flg = !doneTodos[index].flg
    this.setState({ todos: doneTodos })
  }

  // completeTask(index) {
  //   const todo = this.state.todos[index];
  //   todo.flg = todo.flg ? false : true 
  //   this.setState(this.state.todos);
  // }

  render(){

    // 画面に描画したいものをreturnの中に書く
    return (
      <div>
        <h1>todoリスト</h1>
        <input value={this.state.task} onChange={(e) => { this.createTask(e) } } />
        {/* フォームに入力された値をcreateTask関数からtaskというステートで受け取る。値が変更されるとcreateTask関数が実行される */}
        <button onClick={()=> this.addTask() }>追加</button>
        {/* 追加ボタンを押すとaddTask関数が実行される */}
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
            {todo.flg ? <del>{todo.title}</del> : <span>{todo.title}</span>}
            <button onClick={() => this.completeTask(index)}>完了</button>
            <button onClick={() => this.removeTask(index)}>削除</button>
          </li>
          ))}
        </ul>
      </div>
    )

  }
    
}

export default App;
