/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_invitational_player_rating', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    invitational_participant_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'phpbb_invitational_player_rating'
  });
};
