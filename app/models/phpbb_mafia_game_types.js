/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_mafia_game_types', {
    type_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    group_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    archive_forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    max_players: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "13"
    },
    signup_limit: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    prein_percentage: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "50"
    },
    is_locked: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_mafia_game_types'
  });
};
