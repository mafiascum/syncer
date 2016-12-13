/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_mafia_slots', {
    slot_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    game_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    faction_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    slot_faction_alternate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slot_status: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    slot_status_alternate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    slot_outcome: {
      type: DataTypes.INTEGER(3),
      allowNull: true,
      defaultValue: "0"
    },
    slot_role_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    slot_role_alternate: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'phpbb_mafia_slots'
  });
};
