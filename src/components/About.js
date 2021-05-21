// import React, { Component } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';

// 元々の関数コンポーネント
// const About = () => {
//   return <h2>About</h2>;
// }

// クラスコンポーネントで親のparamsを受け取る
// class About extends Component {
//   render() {
//     const { params } = this.props.match
//     return (
//       <h2>About: {params.aboutId}</h2>
//     )
//   }
// }

// 関数コンポーネントで親のparamsを受け取る
// propsとか書かなくていい
  const About = () => {
  const { aboutId } = useParams();
  return <h2>About: { aboutId }</h2>
}

export default About