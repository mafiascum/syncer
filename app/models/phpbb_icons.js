/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_icons', {
    icons_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    icons_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    icons_width: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    icons_height: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    icons_order: {
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
    tableName: 'phpbb_icons'
  });
};
