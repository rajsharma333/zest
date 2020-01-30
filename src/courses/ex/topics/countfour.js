import React from 'react';

const CountFour = React.memo((props) => {
  console.log('Count Four rendered')
  return(
    <>
      <h1>{props.countFour}</h1>
      <button onClick={props.increaseCountFour}>Increase Count Four</button>
    </>
  )
});

export default CountFour;
