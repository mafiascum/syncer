/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_reports_reasons', {
    reason_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    reason_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    reason_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reason_order: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_reports_reasons'
  });
};
