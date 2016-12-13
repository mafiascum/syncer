/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_topic_posters', {
    topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    poster_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    number_of_posts: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    }
  }, {
    tableName: 'phpbb_topic_posters'
  });
};
