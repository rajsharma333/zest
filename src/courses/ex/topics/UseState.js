import React, { useState } from 'react';


const UseState = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Count is {count}</h1>

      <button onClick={increaseCount}>Increase Count</button>
      <UseStateWithSimpleObject />
      <UseStateWithform />
    </>
  )
}

const UseStateWithSimpleObject = () => {
  const [counter, setCount] = useState({message: 'No Count', count:0})

  const setMessage = () => {
    setCount({...counter, message: 'New Count is'});
  }
  const increaseCount = () => {
    setCount({...counter, count: counter.count+ 1})
  }

  return(
    <>
      <h1>{counter.message} - {counter.count} </h1>
      <button onClick={setMessage}>Set Message</button>
      <button onClick={increaseCount}>Increate Count</button>
      <button onClick={() => {increaseCount(); setMessage();}}>Set Message and Count</button>
    </>
  )
};

const UseStateWithform = () => {
  const [user, setUser] = useState({firstName: '', lastName:''})

  const handleChange = (e) => {
    setUser({...user, [e.target.name]:e.target.value })
  }

  return(
    <>
      <h1></h1>
      <input type="text" onChange={(e) => handleChange(e)} name="firstName" value={user.firstName} placeholder="First Name" />
      <div>First Name - {user.firstName}</div><br/>
      <input type="text" onChange={(e) => handleChange(e)} name="lastName" value={user.lastName} placeholder="Last Name" />
      <div>Last Name - {user.lastName}</div>
    </>
  )
};


export default UseState;
