/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_acl_roles_data', {
    role_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    auth_option_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    auth_setting: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_acl_roles_data'
  });
};
