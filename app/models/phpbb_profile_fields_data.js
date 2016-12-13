/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_profile_fields_data', {
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0",
      primaryKey: true
    },
    pf_numberspam: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    pf_textspam: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pf_user_gender: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    },
    pf_user_pronoun: {
      type: DataTypes.INTEGER(8),
      allowNull: true
    }
  }, {
    tableName: 'phpbb_profile_fields_data'
  });
};
