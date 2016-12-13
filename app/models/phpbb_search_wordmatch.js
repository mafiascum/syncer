/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_search_wordmatch', {
    post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    word_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    title_match: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_search_wordmatch'
  });
};
