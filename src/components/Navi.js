import React from 'react';
import { useHistory } from 'react-router-dom';

const Navi = () => {
  const history = useHistory();
  // 履歴をもって何か動作をする 履歴を追加する＝新しい画面を表示する
  const handleLink = path => history.push(path);
  // handleLinkという名前の(アロー)関数。pathという引数を受け取る
  // historyオブジェクトのpushメソッドで、handleLink関数の引数に入っているパスに遷移
  return (
    <nav>
      <button onClick={() => handleLink('/about/100')}>About</button>
      {/* ボタンが押された時直接関数ではなく関数の紐付けを書く */}
      <button onClick={() => handleLink('/users') }>Users</button>
      <button onClick={() => handleLink('/topics') }>Topics</button>
      <button onClick={() => handleLink('/') }>Home</button>
    </nav>
  )
}

export default Navi