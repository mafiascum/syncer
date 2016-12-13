/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_styles', {
    style_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    style_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    style_copyright: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    style_active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    template_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    theme_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    imageset_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_styles'
  });
};
