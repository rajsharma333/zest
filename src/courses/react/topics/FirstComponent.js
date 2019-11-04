import React from 'react';
import Highlight from 'react-highlight';

const FirstComponent = () => {
  return (
    <div className="">
      <h2>First React Component</h2>

      <p>Create a new file App.js inside src folder. In App.js file create first react component.</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';

          class App extends React.Component {
            render(){
              return <h1>First React Component</h1>;
            }
          }

          export default App;
        `}</Highlight>
      </div>

      <p>There are two ways to create a react component, Class component and functional component. Minimal
      standard structure of class and functional component is as below</p>
      <p>Class Component</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';

          class ComponentName extends React.Component {
            render(){
              return (
                //JSX code;
              )
            }
          }

          export default ComponentName;
        `}</Highlight>
      </div>
      <p>Functional Component</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';

          const ComponentName = () => {
            return (
              //JSX code;
            )
          }

          export default ComponentName;
        `}</Highlight>
      </div>

      <p>Step 7 - Import App component in index.js file and replace JSX code with App component</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';
          import ReactDOM from 'react-dom';
          import App from './App'

          ReactDOM.render(<App/>, document.getElementById('root'));
        `}</Highlight>
      </div>

      <h4>Adding CSS file</h4>
      <p>Create new file App.css inside src folder and add some styles in it. Import this css file in App.js</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';
          import './App.css';

          class App extends React.Component {
          .............
        `}</Highlight>
      </div>

      <h4>Composing Components</h4>
      <p>Create new folder components inside src folder and create two new files Header.js and Content.js in this</p>
      <div className="cb">
        <Highlight language="javascript">{`
          >zest
            >public
            >src
              >components
                Header.js
                Content.js
              index.js
              App.js
              App.css
              serviceWorder.js
            package.json
        `}</Highlight>
      </div>

      <p>Write following code in Header.js and Content.js respectively</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';

          const Header = () => {
            return <header>Header</header>
          }

          export default Header;
        `}</Highlight>
      </div>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';

          const Content = () => {
            return <section>Content</section>
          }

          export default Content;
        `}</Highlight>
      </div>

      <p>Import and use these two files on App.js</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';
          import Header from './components/Header';
          import Content from './components/Content';

          class App extends React.Component {
            render(){
              return (
                <Header />
                <Content />
              )
            ..................
        `}</Highlight>
      </div>
      <p>This will through an error because return statment accepts single jsx tag only. This can
      be solved by wrapping Header and Content with a div or even better you can use React.Fragment to wrap
      because this will not add an unnecessary extra node in DOM</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';
          import Header from './components/Header';
          import Content from './components/Content';

          class App extends React.Component {
            render(){
              return (
                <React.Fragment>
                  <Header />
                  <Content />
                </React.Fragment>
              )
            ..................
        `}</Highlight>
      </div>

      <h4>Add Images</h4>
      <p>We can use images with React in two ways. First one is using images from src folder. In this approach
      images will be a part of bundle file.To use this we need to first import image file than we can use it in code.</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';
          import logo from '../images/logo.png';

          const Header = () => {
            return (
              <header>
                <img src={logo}/>
                Header
              </header>
          ...................
        `}</Highlight>
      </div>
      <p>Another way is using images from public folder. In this approach image would not be a part of bundle.
      We use process.env.Public_URL for image path that is replaced by webpack with actual path.</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import React from 'react';

          const Header = () => {
            return (
              <header>
                <img src={process.env.PUBLIC_URL + '/logo.png'}/>
                Header
              </header>
          ...................
        `}</Highlight>
      </div>









   </div>


  )
}

export default FirstComponent;
