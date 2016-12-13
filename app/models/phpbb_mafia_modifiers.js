/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_mafia_modifiers', {
    modifier_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    modifier_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'phpbb_mafia_modifiers'
  });
};
