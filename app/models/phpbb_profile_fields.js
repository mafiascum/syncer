/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_profile_fields', {
    field_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    field_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    field_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    field_ident: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    field_length: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    field_minlen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    field_maxlen: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    field_novalue: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    field_default_value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    field_validation: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    field_required: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    field_show_novalue: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    field_show_on_reg: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    field_show_on_vt: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    field_show_profile: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    field_hide: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    field_no_view: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    field_active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    field_order: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_profile_fields'
  });
};
