import React from 'react';
import Highlight   from 'react-highlight';

const Objects = () => {
  return (
    <div>
      <h2 className="underline">Objects</h2>
      <p>Javascript Objects can be reffered as a collection of realted data. Objects have
      state(properties) and behavior(methods). In below example myCar is an object having make
      and model properties and start method. Properties or methods are normal javascript variables
      attached to that object. So all variable naming rules applies to object properties  </p>
      <div className="cb">
        <Highlight language="javascript">{`
            const myCar = {
              'make': 'Renault',
              'model': 'Duster',
              'start': function(){console.log('Car started')}
            }
        `}</Highlight>
      </div>

      <h3 className="underline">Assign Properties</h3>
      <p>New properties can be assigned using following three ways</p>
      <p>Dot Notation</p>
      <div className="cb">
        <Highlight language="javascript">{`
          myCar.color = 'red'
        `}</Highlight>
      </div>
      <p>Bracket [ ] notation</p>
      <div className="cb">
        <Highlight language="javascript">{`
          myCar['year'] = '2018'
        `}</Highlight>
      </div>
      <p>Object.defineProperty method</p>
      <div className="cb">
        <Highlight language="javascript">{`
          Object.defineProperty(car, "variant", {
            writable: true,
            enumerable: true,
            configurable: false,
            value: 'RXL'
          })
        `}</Highlight>
      </div>

      <h3 className="underline">Access Properties</h3>
      <p>Javascript properties can be accessed either using dot notation or bracket [] notation</p>
      <div className="cb">
        <Highlight language="javascript">{`
            myCar.make     // Renault
            myCar['model']  // Duster
        `}</Highlight>
      </div>


      <h3 className="underline">Create New Object - Object Literal</h3>
      <p>This is the easiest way to create new object. Syntax with an example given below</p>
      <div className="cb">
        <Highlight language="javascript">{`
          const myCar = {
            'make': 'Renault',
            'model': 'Duster',
            'start': function(){console.log('Car started')}
          }
        `}</Highlight>
      </div>

      <h3 className="underline">Create New Object - Using Constructor Function</h3>
      <p>In this method first we create and object using constructor functions. Then we create instance
      of the object using new keyword. Constructor name should start with capital letter</p>
      <div className="cb">
        <Highlight language="javascript">{`
          const Car = (make, model, color) {
            this.make: make,
            this.model: model,
            this.color: color,
            this.start: function(){console.log('Car started')}
          }

          const myCar = new Car('Renault', 'Duster', "Red");
        `}</Highlight>
      </div>

      <h3 className="underline">Create New Object - Using Instance of Object</h3>
      <p></p>
      <div className="cb">
        <Highlight language="javascript">{`
          cosnt myCar = new Object();
          myCar.make = 'Renault';
          myCar.model = "Duster";
          myCar.color = "Red";

        `}</Highlight>
      </div>


      <h4>Key Points</h4>
      <ul>
        <li>Object names and properties names are case sensitive</li>
        <li>Object names should always be placed in quoted if not valid javascript variables</li>
        <li>Unassigned properties of an object are undefined not null</li>
        <li>Object Property names can be any valid javscript string or anything that can be converted </li>
        <li>any property name that is not a valid JavaScript variable (for example, a property name that
        has a space or a hyphen, or that starts with a number) can only be accessed using the square bracket notation</li>
        <li>dfdsf</li>
        <li>dfdsf</li>
        <li>dfdsf</li>
      </ul>


    </div>
  )
}

export default Objects;
