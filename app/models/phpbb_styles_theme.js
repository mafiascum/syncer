/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_styles_theme', {
    theme_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    theme_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    theme_copyright: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    theme_path: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    theme_storedb: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    theme_mtime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    theme_data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'phpbb_styles_theme'
  });
};
