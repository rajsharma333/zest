import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ExHome from './ExHome';
import Jsx from './topics/Jsx';
import UseState from './topics/UseState';
import UseEffect from './topics/UseEffect';
import ReactMemo from './topics/ReactMemo';
import NotFound from './../../NotFound';

const Content = () => {
  return (
      <div className="doc-componentpage">
        <Switch>
          <Route path="/ex/jsx" component={Jsx}/>
          <Route path="/ex/UseState" component={UseState}/>
          <Route path="/ex/UseEffect" component={UseEffect}/>
          <Route path="/ex/ReactMemo" component={ReactMemo}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
  )
}

export default Content;
