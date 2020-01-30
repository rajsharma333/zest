import React, { useState, useEffect} from 'react';


const UseEffect = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1)
  }

  //Simple Use effect
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  //Use effect with cleanup
  useEffect(() => {
    console.log('component mounted')

    return () => {
      console.log('component unmounted');
    };
  });

  //Use effect on first render only using blank array as second argument
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, []);

  //Use effect only when count value changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
    </>
  )
}




export default UseEffect;
