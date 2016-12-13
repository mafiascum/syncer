/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_sitelist', {
    site_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    site_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    site_hostname: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    ip_exclude: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_sitelist'
  });
};
