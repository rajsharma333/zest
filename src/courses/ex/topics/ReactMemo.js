import React, { useState } from 'react';

const ReactMemo = () => {
  const [countThree, setCountThree] = useState(0)
  const [countFour, setCountFour] = useState(0)

  const increaseCountThree = () => {
    setCountThree(countThree + 1)
  }

  const increaseCountFour = () => {
    setCountFour(countFour + 1)
  }

  return (
    <>
      <h1>React Memo</h1>
      <CountOne />
      <CountTwo />
      <CountThree countThree={countThree} />
      <CountThreeButton  increaseCountThree={increaseCountThree} />
      <CountFour countFour={countFour} />
      <CountFourButton  increaseCountFour={increaseCountFour} />
    </>
  )
}

const CountOne = () => {
  const [countOne, setCountOne] = useState(0)
  const increaseCountOne = () => {
    setCountOne(countOne + 1)
  }
  console.log('Count One rendered')
  return(
    <>
      <h1>{countOne}</h1>
      <button onClick={increaseCountOne}>Increase Count One</button>
    </>
  )
};

const CountTwo = () => {
  const [countTwo, setCountTwo] = useState(0)
  const increaseCountTwo = () => {
    setCountTwo(countTwo + 1)
  }
  console.log('Count Two rendered')
  return(
    <>
      <h1>{countTwo}</h1>
      <button onClick={increaseCountTwo}>Increase Count Two</button>
    </>
  )
};


const CountThree = React.memo((props) => {
  console.log('Count Three rendered')
  return(
      <h1>{props.countThree}</h1>
  )
});

const CountThreeButton = React.memo((props) => {
  console.log('Count Three Button rendered')
  return(
      <button onClick={props.increaseCountThree}>Increase Count Three</button>
  )
});



const CountFour = React.memo((props) => {
  console.log('Count Four rendered')
  return(
      <h1>{props.countFour}</h1>
  )
});

const CountFourButton = React.memo((props) => {
  console.log('Count Four Button rendered')
  return(
      <button onClick={props.increaseCountFour}>Increase Count Four</button>
  )
});



export default ReactMemo;
