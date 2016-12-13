/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_styles_imageset', {
    imageset_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    imageset_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    imageset_copyright: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    imageset_path: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'phpbb_styles_imageset'
  });
};
