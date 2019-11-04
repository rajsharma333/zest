import React from 'react';
import Highlight   from 'react-highlight';

const Context = () => {
  return (
    <div>
      <h3 className="underline">Context</h3>

      <p>In Javascript variables are used to name any value. We normally create variable
      to refence some values that might be used multiple times.</p>
      <div className="cb">
        <Highlight language="javascript">{`
            var account = "LAN-09989890";
            var result = 5*7;
        `}</Highlight>
      </div>



    </div>
  )
}

export default Context;
