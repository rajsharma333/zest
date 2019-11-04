import React from 'react';
import Highlight   from 'react-highlight';

const Abstraction = () => {
  return (
    <div>
      <h3 className="underline">Variable</h3>

      <p>In Javascript variables are used to name any value. We normally create variable
      to refence some values that might be used multiple times.</p>
      <div className="cb">
        <Highlight language="javascript">{`
            var account = "LAN-09989890";
            var result = 5*7;
        `}</Highlight>
      </div>

      <p>Variable names can be written using letters (a-z), numbers (0-9),
        dollar sign symbols ($), and underscores (_). but can not begin with number. Reserved keywords
        can not be used as variable names.
      </p>
      <div className="cb">
        <Highlight language="javascript">{`
            var account = "LAN-09989890";                // Valid name
            var $account = "LAN-09989890";               // Valid name
            var _account = "LAN-09989890";               // Valid name
            var account1 = "LAN-09989890";               // Valid name
            var my-account = "LAN-09989890";              // Invalid name
            var 1staccount = "LAN-09989890";              // Invalid name
            var class = "LAN-09989890";                 // Invalid name
        `}</Highlight>
      </div>

      <p>Variable names are case sensitive
      </p>
      <div className="cb">
        <Highlight language="javascript">{`
            var account = "LAN-09989890";
            var Account = "JAS-09989890";

            These are two different variables
        `}</Highlight>
      </div>

      <p>In ES6 two new ways 'let' and 'const' are added to declare variables. So we can declare
      variables in 3 different ways.</p>
      <div className="cb">
        <Highlight language="javascript">{`
            var account = "LAN-09989890";
            const account = "LAN-09989890";
            let account = "LAN-09989890";

            These are two different variables
        `}</Highlight>
      </div>

      <br/><br/>
      <h2 className="underline">Scope</h2>
      <p>Scope in JavaScript refers to the current context of code, which determines
      the accessibility of variables to JavaScript. JavaScript has two scopes, global and local.
      Any variable declared outside a function belongs to global scope and is accessible from anywhere
      in the code. Aa variable declared inside a function belongs to local scope and can not be accessed
      from outside the function. but can be accessed within function and from any function nested in that
      function</p>
      <div className="cb">
        <Highlight language="javascript">{`
          var globalmessage = "This is a global variable";
          
          function scope() {
             var localmessage = "This is a local variable";
             console.log(globalmessage);
             console.log(localmessage);
           }
           scope();

           Output
           // This is a global variable
           // This is a local variable
        `}</Highlight>
      </div>

    </div>
  )
}

export default Abstraction;
