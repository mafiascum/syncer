/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valentines_answers', {
    question_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    answer: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    prefanswer: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    weight: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "3"
    }
  }, {
    tableName: 'valentines_answers'
  });
};
