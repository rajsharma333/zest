import React from 'react';
import Highlight from 'react-highlight';

const Installation = () => {
  return (
    <div className="">
      <h2>Installation and Setup</h2>

      <p>Step 1 - to create new react app run npx create-react-app appname</p>
      <div className="cb">
        <Highlight language="javascript">{`
         C:\\> npx create-react-app zest
        `}</Highlight>
      </div>

      <p>Step 2 - To start project run npm start and open url localhost:3000 in browser</p>
      <div className="cb">
        <Highlight language="javascript">{`
          C:\\> cd zest
          C:\\zest> npm start
        `}</Highlight>
      </div>

      <p>Step 3 - Delete all files from src folder except serviceWorder.js</p>
      <div className="cb">
        <Highlight language="javascript">{`
          >zest
            >public
            >src
              serviceWorder.js
            package.json

        `}</Highlight>
      </div>

      <p>Step 4 - Add new file index.js in src folder</p>
      <div className="cb">
        <Highlight language="javascript">{`
          >zest
            >public
            >src
              index.js
              serviceWorder.js
            package.json
        `}</Highlight>
      </div>

      <p>Step 5 - in index.js file, import React and ReactDOM and add following code</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';
          import ReactDOM from 'react-dom';

          ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
        `}</Highlight>
      </div>

      <h4>Adding Bootstrap and Font Awesome</h4>
      <p>We can use libraries like Bootstrap or font icons either installing through npm or direcly adding url in
      out index.html file which is inside public folder</p>
      <div className="cb">
        <Highlight language="javascript">{`
          npm install react-bootstrap bootstrap

          /**import following line in index.js or App.js files*/
          import 'bootstrap/dist/css/bootstrap.min.css';

          or

          /**add following line in index.html*/
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        `}</Highlight>
      </div>

   </div>


  )
}

export default Installation;
