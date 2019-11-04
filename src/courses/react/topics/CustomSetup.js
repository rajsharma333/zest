import React from 'react';
import Highlight   from 'react-highlight';

const CustomSetup = () => {
  return (
    <div>
      create new folder<br/>
      mkdir react-light
      <p>create package.json file in react-light subfolder<br/>
      cd react-light <br/>
      npm init
      </p>
      <p>Install React<br/>
      npm install react</p>

      <p>install react-dom<br/>
      npm install react-dom</p>

      <p>Create .gitignore file<br/>
      type nul > .gitignore</p>


    </div>
  )
}

export default CustomSetup;
