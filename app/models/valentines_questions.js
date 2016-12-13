/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('valentines_questions', {
    question_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Answer1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Answer2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Answer3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Answer4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Answer5: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'valentines_questions'
  });
};
