import React from 'react';
import Highlight from 'react-highlight';

const RenderNavList = () => {
  return (
    <div className="">
      <h2>Render Navigation List</h2>

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









   </div>


  )
}

export default RenderNavList;
