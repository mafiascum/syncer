/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_topic_mod', {
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'phpbb_topic_mod'
  });
};
