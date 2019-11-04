import React from 'react';
import Highlight from 'react-highlight';

const ReduxSetup = () => {
  return (
    <div className="">
      <h2>Redux Setup</h2>
      <h4>Step 1 - Create Store</h4>
      <div className="cb">
        <Highlight language="javascript">{`
          import { createStore } from 'redux';
          import rootReducer from '../reducers/rootReducer';

          const initialState = { };
          const store = createStore(
            rootReducer,
            initialState
          );

          export default store;
        `}</Highlight>
      </div>

      <h4>Step 2 - Add Thunk middleware</h4>
      <div className="cb">
        <Highlight language="javascript">{`
          import { createStore, applyMiddleware } from 'redux';
          import rootReducer from '../reducers/rootReducer';
          import thunk from 'redux-thunk';

          const initialState = { };
          const middleware = [thunk];
          const store = createStore(
            rootReducer,
            initialState,
            applyMiddleware(...middleware)
          );

          export default store;
        `}</Highlight>
      </div>

      <h4>Step 3 - Add Redux devtool middleware</h4>
      <div className="cb">
        <Highlight language="javascript">{`
          import { createStore, applyMiddleware } from 'redux';
          import rootReducer from '../reducers/rootReducer';
          import thunk from 'redux-thunk';
          import { composeWithDevTools } from 'redux-devtools-extension';

          const initialState = { };
          const middleware = [thunk];
          const store = createStore(
            rootReducer,
            initialState,
            composeWithDevTools(applyMiddleware(...middleware))
          );

          export default store;
        `}</Highlight>
      </div><br/>

      <h3>Step 4 - Bind Redux with app</h3>
      <p>In index.js file wrap App component with Provider</p>
      <div className="cb">
        <Highlight language="javascript">{`
          ...
          import { Provider } from 'react-redux';
          import store from './store.js';

          ReactDom.render(
            <Provider store={store}> <App/> </Provider>,
            document.getElementById('root')
          )
          ...
        `}</Highlight>
      </div><br/>

      <h3>Step 5 - Create Reducers</h3>
      <p>In Reducers folder create muliple reducers for each page or module and add
      following code in each file</p>
      <div className="cb">
        <Highlight language="javascript">{`
          const initialState = { };

          const userReducer = (state = initialState, action) => {
            return state
          };

          export default userReducer;
        `}</Highlight>
      </div>

      <h4>Step 6 - Create rootReducer</h4>
      <div className="cb">
        <Highlight language="javascript">{`
          import { combineReducers } from 'redux';
          import userReducer from './userReducer';
          import profileReducer from './profileReducer';

          const rootReducer = combineReducers({
            user: userReducer,
            profile: profileReducers,
            ...
          });

          export default userReducer;
        `}</Highlight>
      </div>

      <h4>Step 6 - Create user Actions</h4>
      <div className="cb">
        <Highlight language="javascript">{`
          import { combineReducers } from 'redux';
          import userReducer from './userReducer';
          import profileReducer from './profileReducer';

          const rootReducer = combineReducers({
            user: userReducer,
            profile: profileReducers,
            ...
          });

          export default userReducer;
        `}</Highlight>
      </div>

   </div>
  )
}
export default ReduxSetup;
