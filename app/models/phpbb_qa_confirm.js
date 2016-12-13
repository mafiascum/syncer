/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_qa_confirm', {
    session_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: ""
    },
    confirm_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    lang_iso: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    question_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    attempts: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    confirm_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_qa_confirm'
  });
};
