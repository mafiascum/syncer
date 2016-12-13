/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_profile_fields_lang', {
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
    option_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    field_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    lang_value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'phpbb_profile_fields_lang'
  });
};
