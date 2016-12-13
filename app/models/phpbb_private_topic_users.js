/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_private_topic_users', {
    topic_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    permission_type: {
      type: DataTypes.INTEGER(3),
      allowNull: false
    }
  }, {
    tableName: 'phpbb_private_topic_users'
  });
};
