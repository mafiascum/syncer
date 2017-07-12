const fs = require("fs");
const path = require("path");
const config = require('./configLoader');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.get('msDbDatabase'), config.get('msDbUsername'), config.get('msDbPassword'), {
    host: config.get('msDbHost'),
    port: config.get('msDbPort'),
    dialect: config.get('msDbDialect'),
    dialectOptions: {
        multipleStatements: config.get('msDbMultipleStatements') === 'true'
    },
    
    define: {
        timestamps: false
    },

    pool: {
        max: config.get('msDbPoolMax'),
        min: config.get('msDbPoolMin'),
        idle: config.get('msDbPoolIdle')
    }
});

const db = {};

fs.readdirSync(path.join(__dirname, 'models'))
  .filter(function(file) {
      return file.endsWith(".js");
  })
  .forEach(function(file) {
      const model = sequelize.import(path.join(__dirname, 'models', file));
      db[model.name] = model;
  });

module.exports = {
    db,
    sequelize,
    Sequelize
}