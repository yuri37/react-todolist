import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const Topics = () => {
  const match = useRouteMatch();

  return (
    <>
      <h2>中項目（ネスト項目）</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v.State</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/components`}>
          <h3>components</h3>
        </Route>
        <Route path={`${match.path}/props-v-state`}>
          <h3>props-v-state</h3>
        </Route>
      </Switch>
    </>
  )

}

export default Topics