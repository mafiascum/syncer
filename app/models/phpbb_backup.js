/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_backup', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    start_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    end_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    }
  }, {
    tableName: 'phpbb_backup'
  });
};
