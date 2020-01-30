import React from 'react';

const CountThree = (props) => {
  console.log('Count Three rendered')
  return(
    <>
      <h1>{props.countThree}</h1>
      <button onClick={props.increaseCountThree}>Increase Count Three</button>
    </>
  )
};


export default React.memo(CountThree);
