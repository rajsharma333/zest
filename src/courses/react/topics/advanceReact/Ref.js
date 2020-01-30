import React from 'react';
import Highlight from 'react-highlight';

const UseState = () => {
  return (
    <>
      <h1>UseState</h1>
      <Highlight language="javascript">{`
        const [inputValue, setInputValue] = useState('');

        const handleOnChange = (e) => {
          setInputValue(e.target.value)
        };

        <input type="text" name="name" value={inputValue} onChange={(e) => handleOnChange(e)} />
      `}</Highlight>
    </>
  )
}

export default UseState;
