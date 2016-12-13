/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_mafia_games', {
    game_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    numbering: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    requested_players: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    entered_players: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    maximum_players: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    replacements: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    game_type: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    status_alternate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    created_by_user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    main_mod_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    approved_by_user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    approved_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    started_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    completed_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    bbcode_uid: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bbcode_bitfield: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'phpbb_mafia_games'
  });
};
