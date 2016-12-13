/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_forums_access', {
    forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    session_id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    }
  }, {
    tableName: 'phpbb_forums_access'
  });
};
