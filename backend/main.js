require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logging__ = __webpack_require__(19);






__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();
const { PORT = 3030 } = process.env;

Object(__WEBPACK_IMPORTED_MODULE_2__logging__["a" /* setupLogging */])();

__WEBPACK_IMPORTED_MODULE_1__server__["a" /* app */].listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}!`);
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rootRoutes__ = __webpack_require__(7);






const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();
/* harmony export (immutable) */ __webpack_exports__["a"] = app;


app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_2_cors___default()());

if (true) {
  app.use(__WEBPACK_IMPORTED_MODULE_1_express___default.a.static('public'));
}

app.use(__WEBPACK_IMPORTED_MODULE_3__rootRoutes__["a" /* default */]);

app.use((req, res, next) => {
  res.status(404);
  res.json({ error: '404: Not found' });
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_auth_routes__ = __webpack_require__(8);




const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

router.use('/api/auth', __WEBPACK_IMPORTED_MODULE_1__modules_auth_routes__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authController__ = __webpack_require__(9);




const router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();
router.post('/', __WEBPACK_IMPORTED_MODULE_1__authController__["a" /* authController */]);

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models___ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);



const authController = async (req, res, next) => {
  const { body } = req;
  const user = await __WEBPACK_IMPORTED_MODULE_0__models___["a" /* default */].users.findAll({
    attributes: ['id', 'email', 'name', 'role'],
    where: {
      email: body.email,
      password: body.password
    },
    rejectOnEmpty: true
  }).then(user => {
    const userJson = JSON.parse(JSON.stringify(user))[0];

    const token = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.sign(userJson, 'shhhhh', { expiresIn: 60 * 60 * 24 });

    __WEBPACK_IMPORTED_MODULE_0__models___["a" /* default */].tokens.create({ user_id: userJson.id, token: token, expiresAt: __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.decode(token).exp }, { fields: ['user_id', 'token', 'expiresAt'] });
    return res.json({
      user: userJson,
      token: token
    });
  }).catch(() => {
    return next();
  });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = authController;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {const env = "development" || 'development';

const fs = __webpack_require__(11);
const path = __webpack_require__(12);
const Sequelize = __webpack_require__(13);
const config = __webpack_require__(14)[env];
const DataTypes = __webpack_require__(15);

const basename = path.basename(__filename);

let db = {};
let sequelize = {};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Add all modules to this array
const modelModules = [__webpack_require__(16), __webpack_require__(17)];

modelModules.forEach(modelModule => {
  const model = modelModule(sequelize, DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

/* harmony default export */ __webpack_exports__["a"] = (db);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "src\\models\\index.js"))

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  "development": {
    "username": "root",
    "password": "",
    "database": "4it445",
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": "user",
    "password": "pass",
    "database": "user_xxx",
    "host": "localhost",
    "dialect": "mysql"
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("sequelize/lib/data-types");

/***/ }),
/* 16 */
/***/ (function(module, exports) {


module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    name: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  return users;
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {



module.exports = (sequelize, DataTypes) => {
  const tokens = sequelize.define('tokens', {
    user_id: DataTypes.INTEGER,
    token: DataTypes.STRING,
    expiresAt: DataTypes.DATE
  }, {});
  return tokens;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_log4js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_log4js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_log4js__);


const setupLogging = () => {
  __WEBPACK_IMPORTED_MODULE_0_log4js___default.a.configure({
    appenders: [{ type: 'console' }, {
      type: 'file',
      filename: 'log/app.log'
    }],
    replaceConsole: true
  });
};
/* harmony export (immutable) */ __webpack_exports__["a"] = setupLogging;


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("log4js");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map