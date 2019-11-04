import React from 'react';
import { Route, Switch } from 'react-router-dom';
import JsHome from './courses/js/JsHome';
import Es6Home from './courses/es6/Es6Home';
import ReactHome from './courses/react/ReactHome';
import ReduxHome from './courses/redux/ReduxHome';
import NotFound from './NotFound';



function Content() {
  return (
    <Switch>
      <Route path="/js" component={JsHome}/>
      <Route path="/es6" component={Es6Home}/>
      <Route path="/react" component={ReactHome}/>
      <Route path="/redux" component={ReduxHome}/>
      <Route exact path="/" component={NotFound}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default Content;
