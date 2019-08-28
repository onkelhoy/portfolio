import React from 'react';
import Loadable from 'react-loadable';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routeInfo from './routes.json';
import LoadingIndicator from './components/LoadingIndicator'; 

const paths = [];
const loadables = [];

for (let name in routeInfo) {
  const path = "/" + routeInfo[name];

  const loadableComponent = Loadable({
    loader: () => import(path),
    loading: LoadingIndicator,
  });
  loadables.push(loadableComponent);
  paths.push(<Route key={name} path={`/${name}`} component={loadableComponent}/>)
}

const Routes = (props) => {
  
  return (
    <Router>
      <Switch>
        {paths}
      </Switch>
    </Router>
  );
};

export { loadables }
export default Routes;