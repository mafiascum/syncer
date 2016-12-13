/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_privmsgs_folder', {
    folder_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    folder_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    pm_count: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_privmsgs_folder'
  });
};
