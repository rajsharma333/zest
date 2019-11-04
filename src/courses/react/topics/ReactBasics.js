import React from 'react';
import Highlight   from 'react-highlight';

class ReactBasics extends React.Component{

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

    <h4>Define Constructor</h4>
    <div className="cb">
      <Highlight language="javascript">{`
        class Message extends React.Component{
          constructor(props){
            super(props)
          }

          render(){
            return <h1>Hello</h1>
          }
        }
      `}</Highlight>
    </div>

    <h4>Define & Use State</h4>
    <div className="cb">
      <Highlight language="javascript">{`
        class Message extends React.Component{
          constructor(props){
            super(props)
            state = {
              showMessage : true
            }
          }

          render(){
            return <h1>Hello</h1>
          }
        }
      `}</Highlight>
    </div>

    <h4>Change/Update State</h4>
    <div className="cb">
      <Highlight language="javascript">{`
          const comp = (){
            console.log('abc')
          }
      `}</Highlight>
    </div>


    <h4>Change/Update State</h4>
    <div className="cb">
      <Highlight language="javascript">{`
          const comp = (){
            console.log('abc')
          }
      `}</Highlight>
    </div>

    <h4>Define Lifecycle Methods</h4>
    <div className="cb">
      <Highlight language="javascript">{`
          const comp = (){
            console.log('abc')
          }
      `}</Highlight>
    </div>

    <h4>Using Event Handler</h4>
    <div className="cb">
      <Highlight language="javascript">{`
          const comp = (){
            console.log('abc')
          }
      `}</Highlight>
    </div>

    <h4>Binding Event Handler</h4>
    <div className="cb">
      <Highlight language="javascript">{`
          const comp = (){
            console.log('abc')
          }
      `}</Highlight>
    </div>

    <h4>Passing arguments to event handers</h4>
    <div className="cb">
      <Highlight language="javascript">{`
          const comp = (){
            console.log('abc')
          }
      `}</Highlight>
    </div>

    <h4>Conditional Classes</h4>
    <div className="cb">
      <Highlight language="javascript">{`
          const comp = (){
            console.log('abc')
          }
      `}</Highlight>
    </div>

    <h4>Conditional JSX element using conditional && operator</h4>
    <div className="cb">
      <Highlight language="javascript">{`
          const comp = (){
            console.log('abc')
          }
      `}</Highlight>
    </div>

    <h4>Conditional JSX using ternary operator</h4>
    <div className="cb">
      <Highlight language="javascript">{`
          const comp = (){
            console.log('abc')
          }
      `}</Highlight>
    </div>

    <h4>Render Lists</h4>
    <div className="cb">
      <Highlight language="javascript">{`
        class Message extends React.Component{
          constructor(props){
            super(props)
            state = {
              days : [Mon, Tues, Wed, Thur, Fri, Sat, Sun]
            }
          }

          render(){
            return (
              <ul>
                this.state.days.map(
                  item => <li>item</li>
                )
              </ul>
            )
          }
        }
      `}</Highlight>
    </div>

    <h4>Using Key in list items</h4>
    <div className="cb">
      <Highlight language="javascript">{`
        class Message extends React.Component{
          constructor(props){
            super(props)
            state = {
              days : [Mon, Tues, Wed, Thur, Fri, Sat, Sun]
            }
          }

          render(){
            return (
              <ul>
                this.state.days.map(
                  item => <li key="this.state.days.index">item</li>
                )
              </ul>
            )
          }
        }
      `}</Highlight>
    </div>

  </>)
}
}


export default ReactBasics;
