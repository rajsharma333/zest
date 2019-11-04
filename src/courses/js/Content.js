import React from 'react';
import { Route } from 'react-router-dom';
import Abstraction from './topics/Abstraction';
import Scope from './topics/Scope';
import Context from './topics/Context';


const Content = () => {
  return (
      <div className="doc-componentpage">
        <Route path="/js/variables" component={Abstraction} />
        <Route path="/js/scope" component={Scope} />
        <Route path="/js/context" component={Context} />
      </div>
  )
}

export default Content;
