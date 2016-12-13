/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_extension_groups', {
    group_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    cat_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0"
    },
    allow_group: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    download_mode: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    upload_icon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    max_filesize: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0"
    },
    allowed_forums: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    allow_in_pm: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_extension_groups'
  });
};
