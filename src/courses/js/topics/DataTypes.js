import React from 'react';
import Highlight   from 'react-highlight';

const DataTypes = () => {
  return (
    <div>
      <h3 className="underline">Primiteve and Reference Data Types</h3>
      <div>
        <p>In javascript there are two categories of data types. Primitive and Non-primitive/Reference data types</p>
        <p>Primitive data types are</p>
        <ul>
          <li>String</li>
          <li>Numbers</li>
          <li>Boolean</li>
          <li>Undefined</li>
          <li>Null</li>
          <li>Symbols</li>
        </ul>
        <p>Reference data types are</p>
        <ul>
          <li>Object</li>
          <li>Array</li>
        </ul>
      </div>

      <h4>String</h4>
      <p>A JavaScript string is zero or more characters written inside quotes.</p>


      <div className="cb">
        <Highlight language="javascript">{`
            var account = "LAN-09989890";
            var result = 5*7;
        `}</Highlight>
      </div>



    </div>
  )
}

export default DataTypes;
