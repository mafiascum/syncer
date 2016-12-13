/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_banlist', {
    ban_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ban_userid: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    ban_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    ban_email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    ban_start: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    ban_end: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    ban_exclude: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    ban_reason: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    ban_give_reason: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'phpbb_banlist'
  });
};
