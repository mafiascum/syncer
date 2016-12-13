/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_confirm', {
    confirm_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    session_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    confirm_type: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    seed: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: "0"
    },
    attempts: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_confirm'
  });
};
