import React from 'react';

const PropsAndStates = () => {
  return (
      <div className="">
          <h2>.</h2>
          <p>In React we can pass data to components in two ways, either using props
              or using state. Props are immutable so we use Props when data doesn't change
              during a lifecyle of component. While State are mutable so we use state when
              any value may change.</p>
          <p>Props are passed from parent component to child component and child component can
          access and use that data within it or even can pass it to further child componets. While
          State can be created or can be updated within that component. State can also be passed to
          child component in form or Props
          </p>
          <div className="cb">
            {`<UserProfile user="userData" /> `}<br/><br/>
            {`const UserProfile = props => {`}<br/>
              &nbsp;&nbsp;{`return (`}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;{`<span>{user.firstName}</span> <span>user.lastName</span>`}<br/>
              &nbsp;&nbsp;{`)`}<br/>
            {`}`}

          </div>
          <p>Props are how components talk to each other.<br/>
          props flow downwards from the parent component.<br/>
          There is also the case that you can have default props so that props are set
          even if a parent component doesn’t pass props down.<br/>
          Props are immutable <br/>
          when a component receives data from someone other than the parent or
          user inputs data directly to the component? this is why we have state.<br/>
          When you setState it updates the state object and then re-renders the component<br/>
          Props and State do similar things but are used in different ways. The
          majority of your components will probably be stateless.<br/>
          Props name must follow a camelCase format<br/>
          Passing and accessing Props
          </p>
      </div>

  )
}

export default PropsAndStates;
