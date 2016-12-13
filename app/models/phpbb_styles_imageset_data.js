/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_styles_imageset_data', {
    image_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    image_filename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    image_lang: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    image_height: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    image_width: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    imageset_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_styles_imageset_data'
  });
};
