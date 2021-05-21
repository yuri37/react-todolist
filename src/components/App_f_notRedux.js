import React, { useState } from 'react';

const App = () => {

  const todolist = [
    { title: '概要作成', flg: false },
    // { title: '画面設計作成', flg: false },
    // { title: '詳細設計作成', flg: false },
    // { title: 'コーディング', flg: false },
    // { title: 'テスト', flg: false }
  ]

  const [todos, setTodos] = useState(todolist)
  // todolistはtodoというステートの初期値。todos = todolist (例だけが入っている状態)
  // todosという値をsetTodosという関数で更新する。この関数に引数をつけて呼び出すことでtodosの値が変更される。
  // useStateは現在のstateの値とそれを更新するための関数とをペアにして返す。

  // todos配列は、例を含めた、現時点で画面に見えている(ボタンを押す前の)タスクが「配列の中にオブジェクト」の形で入っている。
  // [ 0: {title: "概要作成", flg: false} 1: {title: "ああ", flg: false}]

  const [task, setTask] = useState("")
  // ""はtaskというステートの初期値。task = "" (フォームに値は入っておらず空欄)
  // フォーム機能のための箇所。""の中に値を入れるとフォームに値が入る
  // setTaskという関数でtaskの値を変更する。

  const createTask = (e) => {
    // createTask関数はフォームの値が変更されると発動。
    setTask(e.target.value)
    // フォームに入力した値を取り出して変数としてsetTask関数に渡す。
    // setTask関数はtaskの値をフォームに入力された値に上書きする。
  }

  const addTask = () => {
    // 追加ボタンを押されると実行
    
    if (task === '') return
    // taskが空ならreturnする
    
    // setTodos(todoss => [...todoss, { title: task, flg: false }])
    setTodos([...todos, { title: task, flg: false }])
    // [...todos]スプレッド構文を使い、配列のデータを展開してあげる。
    // ↑ これは、元々のtodosの配列の内容＋新しく追加する内容で新しい配列を作成している。
    // 現在のtodosと新しいタスクを合体して新しいtodosを作る。
    // setTodosに代入されて初めてtodos配列を上書き)

    setTask('')
    // 入力フォームを空にする

    // console.log(todolist)
    // console.log(todos)
    // // todos配列:現時点で画面に見えているタスクが「配列の中にオブジェクト」の形で入っている
    // // 新しく追加したタスクは入っていない
    // console.log(task)
    // フォームに入力した値が取り出せる
  }

  const removeTask = index => {
    const newTodos = [...todos]
    // 削除後の配列を定義(todos配列をコピー)
    newTodos.splice(index, 1)
    // ボタンが押された箇所の配列を削除
    setTodos(newTodos)
    // console.log(newTodos)
    // console.log(todos)
    // setTodosに削除後の配列を渡す
    // 1.元の配列情報(todos)をもとに新しい配列newTodosを作成
    // 2.対象のindex番号の配列の中身を削除
    // 3.setTodoでnewTodos配列のデータをstateに保存

  }

  const completeTask = index => {
    const doneTodos = [...todos]
    doneTodos[index].flg = !doneTodos[index].flg
    setTodos(doneTodos)
    // console.log(doneTodos)
    // console.log(todos)
  }

  // 画面に描画したいものをreturnの中に書く
  return (
    <div>
      <h1>todoリスト</h1>
      <input value={ task } onChange={ createTask } />
      {/* フォームに入力された値をcreateTask関数からtaskというステートで受け取る。値が変更されるとcreateTask関数が実行される */}
      <button onClick={ addTask }>追加</button>
      {/* 追加ボタンを押すとaddTask関数が実行される */}
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.flg ? <del>{todo.title}</del> : <span>{todo.title}</span>}
            <button onClick={() => completeTask(index)}>完了</button>
            <button onClick={() => removeTask(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  )

}

export default App;
