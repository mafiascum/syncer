/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_mafia_game_status', {
    status_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'phpbb_mafia_game_status'
  });
};
