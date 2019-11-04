import React from 'react';
import Highlight   from 'react-highlight';

const Scope = () => {
  return (
    <div>
      <h3 className="underline">Scope</h3>

      <p>Scope is the space or region where we can access variables, functions or objects
      in our code during runtime. Javascript has follwing two scopes</p>
      <h4>Global Scope</h4>
      <p>Variables defined outside a function is in global scope. There is only one global scopes
      throughout a javascript document</p>
      <h4>Local Scope</h4>
      <p>Variables declared within a function or block(for const and let) are in local scope. They
      can not be accessed outside that function or block</p>

      <h4>Variable Shadowing</h4>
      <p>In javascript variables with same name can be specified at multiple stages. In this case Local
      variables have priority over global variable. This type of behavior is called shadowing</p>

      <h4>Function and Block Level Scope</h4>
      <p>Any variable declared using const or let inside a block can not be accessed outside that block. Thats why
      const and let have block level scope. while variable defined inside a block using var can be accessed outside
      that block because var has function level scope</p>

      <div className="cb">
        <Highlight language="javascript">{`
            var account = "LAN-09989890";
            var result = 5*7;
        `}</Highlight>
      </div>



    </div>
  )
}

export default Scope;
