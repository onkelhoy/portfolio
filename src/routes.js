import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

// import routeInfo from './routes.json';
import LoadingIndicator from './components/LoadingIndicator'; 

// import Home from 'pages/Home';
// import NotFound from 'pages/NotFound';

const CV = Loadable({
  loader: () => import('./pages/CV'),
  loading: LoadingIndicator,
});

const Routes = (props) => {
  
  return (
    <CV />
  );
};

export default Routes;