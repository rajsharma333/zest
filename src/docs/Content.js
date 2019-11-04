import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../topics/Home';
import Installation from '../topics/Installation';
import Routes from '../topics/Routes';
import Topics from '../topics/Topics';
import QnA from '../topics/QnA';

const Content = () => {
  return (
      <div className="doc-componentpage">
        <Route path="/" exact component={Home}/>
        <Route path="/topics" component={Topics}/>
        <Route path="/installation" component={Installation}/>
        <Route path="/routes" component={Routes}/>
        <Route path="/QnA" component={QnA}/>
      </div>
  )
}

export default Content;
