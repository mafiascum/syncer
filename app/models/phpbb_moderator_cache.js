/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_moderator_cache', {
    forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    group_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    display_on_index: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'phpbb_moderator_cache'
  });
};
