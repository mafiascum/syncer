/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_styles_template', {
    template_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    template_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    template_copyright: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    template_path: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    bbcode_bitfield: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "kNg="
    },
    template_storedb: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    template_inherits_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    template_inherit_path: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'phpbb_styles_template'
  });
};
