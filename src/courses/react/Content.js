import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './topics/Home';
import Installation from './topics/Installation';
import FirstComponent from './topics/FirstComponent';
import FirstForm from './topics/FirstForm';
import ReduxSetup from './topics/ReduxSetup';
import MongoDB from './topics/MongoDB';
import SSR from './topics/SSR';
import BasicSteps from './topics/BasicSteps';



import Components from './topics/Components';
import PropsAndStates from './topics/PropsAndStates';
import Jsx from './topics/Jsx';
import Routes from './topics/Routes';
import ReactBasics from './topics/ReactBasics';
import Topics from './topics/Topics';
import QnA from './topics/QnA';
import CustomSetup from './topics/CustomSetup';
import NotFound from './../../NotFound';

const Content = () => {
  return (
      <div className="doc-componentpage">
        <Switch>
          <Route path="/react/basicsteps" component={BasicSteps}/>
          <Route path="/react/ssr" component={SSR}/>
          <Route path="/react/installation" component={Installation}/>
          <Route path="/react/first-component" component={FirstComponent}/>
          <Route path="/react/first-form" component={FirstForm}/>
          <Route path="/react/redux-setup" component={ReduxSetup}/>
          <Route path="/react/mongoDB" component={MongoDB}/>


          <Route path="/react/topics" component={Topics}/>
          <Route path="/react/components" component={Components}/>
          <Route path="/react/propsandstates" component={PropsAndStates}/>
          <Route path="/react/jsx" component={Jsx}/>
          <Route path="/react/reactBasics" component={ReactBasics}/>
          <Route path="/react/routes" component={Routes}/>
          <Route path="/react/customSetup" component={CustomSetup}/>
          <Route path="/react/QnA" component={QnA}/>
          <Route exact path="/react/" component={Topics}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
  )
}

export default Content;
