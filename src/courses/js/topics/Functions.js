import React from 'react';
import Highlight   from 'react-highlight';

const Functions = () => {
  return (
    <div>
      <h3 className="underline">Functions</h3>

      <h4>First Class Functions</h4>
      <p>The term 'first-class' means that something is just a value. A first-class function is
      one that can go anywhere that any other value can go. Like in JavaScript functions can be assigned
      to a variable, can be used as an array value, can be used as an object method or can be passed as an
      argument in another function</p>
      <div className="cb">
        <Highlight language="javascript">{`
          var func = () => {console.log('I am a function')};
          func();

          var arr = [31, () => {console.log('I am a function')}];
          arr[1]();

          var obj = {
            func : () => {console.log('I am a function')}
          }
          obj.func();

          var addTwo = (num, func) => {
            console.log(num + func());
          }
          addtwo(20, () => {return 10});
        `}</Highlight>
      </div>



    </div>
  )
}

export default Functions;
