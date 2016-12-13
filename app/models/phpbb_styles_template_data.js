/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_styles_template_data', {
    template_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    template_filename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    template_included: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    template_mtime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    template_data: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'phpbb_styles_template_data'
  });
};
