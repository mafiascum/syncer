/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_groups', {
    group_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "1"
    },
    group_founder_manage: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    group_skip_auth: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    group_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    group_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    group_desc_bitfield: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    group_desc_options: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "7"
    },
    group_desc_uid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    group_display: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    group_avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    group_avatar_type: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0"
    },
    group_avatar_width: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    group_avatar_height: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    group_rank: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    group_colour: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    group_sig_chars: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    group_receive_pm: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    group_message_limit: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    group_max_recipients: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    group_legend: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    tableName: 'phpbb_groups'
  });
};
