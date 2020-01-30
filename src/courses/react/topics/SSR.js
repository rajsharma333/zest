import React from 'react';
import Highlight from 'react-highlight';

const SSR = () => {
  return (
    <div className="">
      <h2>SERVER SIDE RENDERING</h2>

      <p>Step 1 - Create a new folder and run npm init</p>
      <div className="cb">
        <Highlight language="javascript">{`
          ssrproject > npm init
        `}</Highlight>
      </div>

      <p>Step 2 - Copy following dependencies in package.json and run npm install</p>
      <div className="cb">
        <Highlight language="javascript">{`
          "dependencies": {
          "axios": "^0.19.0",
          "compression": "1.7.0",
          "lodash": "^4.17.4",
          "react": "^16.12.0",
          "react-dom": "^16.12.0",
          "react-helmet": "5.2.0",
          "react-redux": "^7.1.3",
          "react-router": "^4.3.1",
          "react-router-config": "^1.0.0-beta.4",
          "react-router-dom": "^4.3.1",
          "redux": "^4.0.4",
          "redux-thunk": "^2.3.0",
          "serialize-javascript": "1.4.0"
        },
        "devDependencies": {
          "babel-cli": "^6.26.0",
          "babel-core": "^6.26.0",
          "babel-loader": "^7.1.2",
          "babel-preset-env": "^1.6.0",
          "babel-preset-es2015": "^6.24.1",
          "babel-preset-es2017": "^6.24.1",
          "babel-preset-react": "^6.24.1",
          "babel-preset-stage-0": "^6.24.1",
          "concurrently": "3.5.0",
          "express": "4.15.4",
          "express-http-proxy": "1.0.6",
          "nodemon": "^1.12.0",
          "npm-run-all": "4.1.1",
          "webpack": "3.5.6",
          "webpack-dev-server": "2.8.2",
          "webpack-merge": "^4.1.0",
          "webpack-node-externals": "^1.6.0"
        }
        `}</Highlight>
      </div>

      <p>Step 3 - Create 3 new files in root.</p>
      <div className="cb">
        <Highlight language="javascript">{`
          webpack.base.js
          webpack.client.js
          webpack.server.js
        `}</Highlight>
      </div>

      <p>Step 4 - Write following code in webpack.base.js for babel compilation</p>
      <div className="cb">
        <Highlight language="javascript">{`
          module.exports = {
            module: {
              rules: [
                {
                  test: /\.js?$/,
                  loader: 'babel-loader',
                  excludes: /node-modules/,
                  options: {
                    presets: [
                      'react',
                      'stage-0'
                      //  ['env',  { targets: { browsers: ['last 2 versions'] }}]
                    ]
                  }
                }
              ]
            }
          }
        `}</Highlight>
      </div>

      <p>Step 5 - create config in webpack.client.js, import base config in it and export merged configs</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import path from 'path';
          import merge from 'webpack-merge';
          import baseConfig from './webpack.base.js';

          const config = {
            entry: './src/client/client.js',
            output: {
              filename: 'bundle.js',
              path: path.resolve(__dirname, 'public')
            }
          };
          module.exports = merge(config, baseConfig);

        `}</Highlight>
      </div>

      <p>Step 6 - copy above code in webpack.server.js and change entry and output. Add target as well</p>
      <div className="cb">
        <Highlight language="javascript">{`
          import path from 'path';
          import merge from 'webpack-merge';
          import baseConfig from './webpack.base.js';

          const config = {
            target: 'node',
            entry: './src/server/server.js',
            output: {
              filename: 'bundle.js',
              path: path.resolve(__dirname, 'build')
            }
          };
          module.exports = merge(config, baseConfig);
        `}</Highlight>
      </div>

      <p>Step 7 - create new folders and files inside those. src/server/server.js and src/client/client.js</p>
      <div className="cb">
        <Highlight language="javascript">{`
          src
            client
              client.js
            server
              server.js
        `}</Highlight>
      </div>

      <p>Step 3 - Create 3 new files in root.</p>
      <div className="cb">
        <Highlight language="javascript">{`
          webpack.base.js
        `}</Highlight>
      </div>

      <p>Step 3 - Create 3 new files in root.</p>
      <div className="cb">
        <Highlight language="javascript">{`
          webpack.base.js
        `}</Highlight>
      </div>

      <p>Step 3 - Create 3 new files in root.</p>
      <div className="cb">
        <Highlight language="javascript">{`
          webpack.base.js
        `}</Highlight>
      </div>

      <p>Step 3 - Create 3 new files in root.</p>
      <div className="cb">
        <Highlight language="javascript">{`
          webpack.base.js
        `}</Highlight>
      </div>




   </div>
  )
}

export default SSR;
