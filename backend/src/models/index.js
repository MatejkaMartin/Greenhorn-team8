const env = process.env.NODE_ENV || 'development';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.js')[env];
const DataTypes = require('sequelize/lib/data-types');

const basename = path.basename(__filename);

let db = {};
let sequelize = {};

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  console.log(`Connecting to DB with config ${JSON.stringify(config)}`)
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

// Add all modules to this array
const modelModules = [
  require('./user'),
  require('./token'),
  require('./department'),
  require('./document'),
  require('./generated_task'),
  require('./job_position'),
  require('./notification'),
  require('./role'),
  require('./state'),
  require('./task_template'),
  require('./task'),
];

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

export default db;
