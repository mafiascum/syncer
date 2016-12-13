/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_poll_options', {
    poll_option_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    poll_option_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    poll_option_total: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_poll_options'
  });
};
