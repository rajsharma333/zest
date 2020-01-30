import React from 'react';
import { Route } from 'react-router-dom';
import DataTypes from './topics/DataTypes';
import Functions from './topics/Functions';
import Abstraction from './topics/Abstraction';
import Objects from './topics/Objects';
import Scope from './topics/Scope';
import Context from './topics/Context';
import ObjectCreation from './topics/ObjectCreation';


const Content = () => {
  return (
      <div className="doc-componentpage">
        <Route path="/js/data-types" component={DataTypes} />
        <Route path="/js/functions" component={Functions} />
        <Route path="/js/variables" component={Abstraction} />
        <Route path="/js/objects" component={Objects} />
        <Route path="/js/scope" component={Scope} />
        <Route path="/js/context" component={Context} />
        <Route path="/js/object-creation" component={ObjectCreation} />
      </div>
  )
}

export default Content;
