import React from 'react';
import Highlight   from 'react-highlight';

class ReduxSetup extends React.Component{

render(){
  return (<>
    <h4>Define a Class Component</h4>
    <div className="cb">
      <Highlight language="javascript">{`
        class Message extends React.Component{
          render(){
            return <h1>Hello</h1>
          }
        }
      `}</Highlight>
    </div>

  </>)
}
}


export default ReduxSetup;
