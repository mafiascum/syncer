/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_mafia_players', {
    player_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    game_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    slot_id: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: "0"
    },
    type: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    replacement_start: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    first_active_post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    last_active_post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    in_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'phpbb_mafia_players'
  });
};
