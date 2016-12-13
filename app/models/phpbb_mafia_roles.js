/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_mafia_roles', {
    role_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role_modifier: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    }
  }, {
    tableName: 'phpbb_mafia_roles'
  });
};
