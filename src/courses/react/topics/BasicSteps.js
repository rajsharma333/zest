import React from 'react';
import Highlight from 'react-highlight';

const SSR = () => {
  return (
    <div className="">
      <h2>SERVER SIDE RENDERING</h2>

      <p>1 - Handle Text Input Field</p>
      <div className="cb">
        <Highlight language="javascript">{`
          const [inputValue, setInputValue] = useState('');

          const handleOnChange = (e) => {
            setInputValue(e.target.value)
          };

          <input type="text" name="name" value={inputValue} onChange={(e) => handleOnChange(e)} />
        `}</Highlight>
      </div>

      <p>2 - Handle Selectbox Field</p>
      <div className="cb">
        <Highlight language="javascript">{`
          const [inputValue, setInputValue] = useState('First');

          const handleOnChange = (e) => {
            setInputValue(e.target.value)
          };

          <select name="name" value={inputValue} onChange={(e) => handleOnChange(e)}>
            <option value="First">First</option>
            <option value="Second">Second</option>
          </select>
        `}</Highlight>
      </div>

      <p>3 - Handle Radio button Fielda</p>
      <div className="cb">
        <Highlight language="javascript">{`
          const [radioValue, setRadioValue] = useState('option1');

          const handleOnChange = (e) => {
            setRadioValue(e.target.value)
          };
          <label>
            <input
              type="radio"
              name="name"
              value="option1"
              checked={radioValue === option1}
              onChange{(e) => setRadioValue(e)}/>
            Option 1
          </label>
          <label>
            <input
            type="radio"
            name="name"
            value="option2"
            checked={radioValue === option2}
            onChange{(e) => setRadioValue(e)}/>
            Option 2
          </label>
        `}</Highlight>
      </div>

      <p>4 - Handle Checkbox Fielda</p>
      <div className="cb">
        <Highlight language="javascript">{`
          Sample
        `}</Highlight>
      </div>

   </div>
  )
}

export default SSR;
