/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_captcha_questions', {
    question_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    strict: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    lang_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    lang_iso: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'phpbb_captcha_questions'
  });
};
