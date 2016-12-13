/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valentines_users', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    question_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false
    }
  }, {
    tableName: 'valentines_users'
  });
};
