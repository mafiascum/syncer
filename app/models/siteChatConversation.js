/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('siteChatConversation', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    created_by_user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'siteChatConversation'
  });
};
