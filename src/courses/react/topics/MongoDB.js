import React from 'react';
import Highlight from 'react-highlight';

const MongoDB = () => {
  return (
    <div className="">
      <h2>MongoDB and express server</h2>

      <p>STEP 1 - Create new folder data in C drive and db inside data folder</p>
      <div className="cb">
        <Highlight language="javascript">{`
          C:
           >data
            >db
        `}</Highlight>
      </div>

      <p>STEP 2 - Run DB</p>
      <div className="cb">
        <Highlight language="javascript">{`
          C://Program Files/MongoDB/Server/3.4/bin>mongod.exe
        `}</Highlight>
      </div>

      <p>STEP 3 - Create a new folder for backend and initiate it with git init. Install some dependencies</p>
      <div className="cb">
        <Highlight language="javascript">{`
          C://earth>npm i mongoose
          C://earth>npm i -D nodemon
        `}</Highlight>
      </div>

      <p>STEP 4 - In package.json add following lines in scripts</p>
      <div className="cb">
        <Highlight language="javascript">{`
          "start": "node server.js",
          "server": "nodemon server.js"
        `}</Highlight>
      </div>

      <p>STEP 5 - Crete a new file server.js and add following code in this file</p>
      <div className="cb">
        <Highlight language="javascript">{`
          const express = require('express');
          const mongoose = require('mongoose');

          const app = express();

          const connectDB = async () => {
            try {
              await mongoose.connect('mongodb://localhost:27017');
              console.log('MongoDB connected');
            } catch(err){
              console.log(err.message);
              process.exit(1);
            }
          }
          app.get('/', (req, res) => res.send('API Running'));

          const PORT = process.env.PORT || 5000;

          app.listen(PORT, () => console.log('Server started on port' + PORT))
        `}</Highlight>
      </div>

      <p>STEP 6 - run server</p>
      <div className="cb">
        <Highlight language="javascript">{`
          C://earth>npm run server
        `}</Highlight>
      </div>
      this will start server on port 5000. 

   </div>
  )
}
export default MongoDB;
