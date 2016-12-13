/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_sessions', {
    session_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    session_user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    session_forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    session_last_visit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    session_start: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    session_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    session_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    session_browser: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    session_forwarded_for: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    session_page: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    session_viewonline: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    session_autologin: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    session_admin: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_sessions'
  });
};
