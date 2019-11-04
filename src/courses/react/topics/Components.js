import React from 'react';

const Components = () => {
  return (
      <div className="">
          <h2>.</h2>
          <p>What are components</p>
          <h3 className="underline">Functional Components</h3>
          <p> Functional component is just a regular JavaScript function in
              which we pass props as an argument and it returns a React element.
              These are also called stateless components.
              Functional components are used mostly for presentational components.
              We can not use State and LifeCycle menthods in Functional Components
              <span class="blue"> (With version 16.8 and above we can use React Hooks useState() and useEffect()
              in Functional componets to achieve that)</span></p>
          <div className="cb">
            <span className="black">Functional component - ES-5</span><br/>
            {`function Message(props) {`}<br/>
                &nbsp;&nbsp;{`return <h1>Hello, {props.name}</h1>`}<br/>
            {`}`}<br/><br/>
            <span className="black">Functional component - ES-6</span><br/>
            {`const Message = (props) => <h1>Hello, {props.name}</h1>`}
          </div>

         <h3 className="underline">Class Components</h3>
         <p>Classes are another way to write React componets. In class component, we
            can use state and lifecyle methods. Class component must have a render method</p>
         <div className="cb">
            <p className="blue">Simplest Class component</p>
            {`class Message extends React.Component {`}<br/>
              &nbsp;&nbsp;{`render() {`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`return <h1>Hello, {this.props.name}</h1> `}<br/>
              &nbsp;&nbsp;{`}`}<br/>
            {`}`}<br/><br/>
            <p className="blue">Standard Class component structure</p>
            {`class Message extends React.Component {`}<br/>
              &nbsp;&nbsp;{`constructor(props) {`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;{`super(props);`}<br/>
              &nbsp;&nbsp;{`}`}<br/><br/>

              &nbsp;&nbsp;{`render() {`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`return <h1>Hello, {this.props.name}</h1> `}<br/>
              &nbsp;&nbsp;{`}`}<br/>
            {`}`}
         </div>

         <h4 className="">Benefits of Functional Components</h4>
         <ul>
            <li>Functional componets are easy to write and easy to test</li>
            <li>Fuctional component can be written in less lines of code compare to class component</li>
            <li>Functional component are better in performace as these uses less line of code resulting smaller
                bundle size. React team is planning to improve performace of functional components in future
                release by avoiding some unnecessary checks and memory allocation.</li>
         </ul>

         <ul>
            <li>Define a class component</li>
            <li>Define constructor</li>
            <li>Render Function</li>
            <li>Using event handelers</li>
            <li>Binding event handlers</li>
            <li>Passing arguments to event handers</li>
            <li>Using lifecycle method</li>
            <li>Define State</li>
            <li>Using State</li>
            <li>Set state</li>
            <li>Conditional classes</li>
            <li>Conditional jsx tags rendering</li>
            <li>list using .map()</li>
            <li>Key in list</li>

         </ul>
       </div>

  )
}

export default Components;
