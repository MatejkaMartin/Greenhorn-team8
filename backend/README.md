
## How to run backned on local

1. Turn on your MySQL server (eg. MAMP, XAMP)
2. Setup backend config file
  in *backend/src/config/config.js*
  `module.exports = {`
  `"development": {`
   `"database": “4it445”,`
   `"username": "root",`  // MySQL username
   `"password": "root",`  // MySQL password
   `"database": "4it445",`
    `"host": "localhost",`
   `"dialect": "mysql”,`
   `"port": "3306"`  // port where is listening your MySQL server
  }

3. Setup the port where the server would listen (eg.3031)
    in *backend/src/index.js*
    `const { PORT = 3031 } = process.env;` // This port number has to be used in cofiguration of frontend
4. Run script `npm run dev`
