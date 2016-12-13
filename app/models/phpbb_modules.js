/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_modules', {
    module_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    module_enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    module_display: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    module_basename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    module_class: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    parent_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    left_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    right_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    module_langname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    module_mode: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    module_auth: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'phpbb_modules'
  });
};
