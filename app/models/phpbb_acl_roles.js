/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_acl_roles', {
    role_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    role_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    role_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    role_order: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_acl_roles'
  });
};
