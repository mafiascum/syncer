/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_login_attempts', {
    attempt_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    attempt_browser: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    attempt_forwarded_for: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    attempt_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    username_clean: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_login_attempts'
  });
};
