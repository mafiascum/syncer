/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_sessions_keys', {
    key_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    last_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    last_login: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_sessions_keys'
  });
};
