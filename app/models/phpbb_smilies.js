/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_smilies', {
    smiley_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    emotion: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    smiley_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    smiley_width: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    smiley_height: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    smiley_order: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    display_on_posting: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'phpbb_smilies'
  });
};
