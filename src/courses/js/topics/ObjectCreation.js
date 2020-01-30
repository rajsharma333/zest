import React from 'react';
import Highlight   from 'react-highlight';

const ObjectCreation = () => {
  return (
    <div>
      <p>In javascript we can create an object using any of following 4 ways</p>

      <h3 className="underline">Object Literal</h3>
      <p>Object Literal is easiest way to create an object</p>
      <div className="cb">
        <Highlight language="javascript">{`
            Const car = {
              model: "Renault Duster",
              color: "red"
              engine: {
                type: "diesel",
                capacity: "1400 cc"
              }
            }
        `}</Highlight>
      </div>

      <p>Properties can be accessed using dot or bracket</p>
      <div className="cb">
        <Highlight language="javascript">{`
            car.model         //output- Renault Duster
            car.engine.type     //output- Diesel
            car["color"]        //output- red
        `}</Highlight>
      </div>

      <p>New properties can be assigned in same way</p>
      <div className="cb">
        <Highlight language="javascript">{`
            car.type = "Manual"
            car["category"] = "SUV"
        `}</Highlight>
      </div>

      <p>Properties can also be assigned using Object.defineProperty method</p>
      <div className="cb">
        <Highlight language="javascript">{`
          Object.defineProperty(car, "variant", {
              writable: true,
              enumerable: true,
              configurable: false,
              value: 'RXL'
            })
        `}</Highlight>
      </div><br/>

      <h3 className="underline">Constructor</h3>


    </div>
  )
}

export default ObjectCreation;
