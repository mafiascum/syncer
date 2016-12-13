/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_zebra', {
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    zebra_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    friend: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    foe: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_zebra'
  });
};
