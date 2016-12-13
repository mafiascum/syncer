/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_invitational_participant', {
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
    user_role: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    }
  }, {
    tableName: 'phpbb_invitational_participant'
  });
};
