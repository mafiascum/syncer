/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_bbcodes', {
    bbcode_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    bbcode_tag: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    bbcode_helpline: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    display_on_posting: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    bbcode_match: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bbcode_tpl: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    first_pass_match: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    first_pass_replace: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    second_pass_match: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    second_pass_replace: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'phpbb_bbcodes'
  });
};
