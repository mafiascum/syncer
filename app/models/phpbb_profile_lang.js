/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_profile_lang', {
    field_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    lang_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    lang_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    lang_explain: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lang_default_value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'phpbb_profile_lang'
  });
};
