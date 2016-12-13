/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('siteChatConversationMessage', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    site_chat_conversation_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipient_user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    }
  }, {
    tableName: 'siteChatConversationMessage'
  });
};
