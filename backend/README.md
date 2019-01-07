
## How to run backned on local

1. Turn on your MySQL server (eg. MAMP, XAMP)
2. Setup backend config file <br/>
  in *backend/src/config/config.js*

  `module.exports = {`<br/>
  `"development": {`<br/>
   `"database": “4it445”,`<br/>
   `"username": "root",`  // MySQL username <br/>
   `"password": "root",`  // MySQL password <br/>
   `"database": "4it445",` <br/>
    `"host": "localhost",` <br/>
   `"dialect": "mysql”,` <br/>
   `"port": "3306"`  // port where is listening your MySQL server<br/>
 `}` <br/>

3. Setup the port where the server would listen (eg.3031) <br/>
    in *backend/src/index.js*

    `const { PORT = 3031 } = process.env;` // This port number has to be used in cofiguration of frontend
4. Run script `npm run dev`
