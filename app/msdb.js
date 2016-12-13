const fs = require("fs");
const path = require("path");
const config = require('./configLoader');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.get('msdbdatabase'), config.get('msdbusername'), config.get('msdbpassword'), {
    host: config.get('msdbhost'),
    port: config.get('msdbport'),
    dialect: config.get('msdbdialect'),

    define: {
        timestamps: false
    },

    pool: {
        max: config.get('msdbpoolmax'),
        min: config.get('msdbpoolmin'),
        idle: config.get('msdbpoolidle')
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