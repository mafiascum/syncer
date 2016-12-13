/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_users', {
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_type: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0"
    },
    group_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "3"
    },
    user_permissions: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_perm_from: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    user_ip: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_regdate: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    username_clean: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_passchg: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_pass_convert: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_email_hash: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: "0"
    },
    user_birthday: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_lastvisit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_lastmark: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_lastpost_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_lastpage: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_last_confirm_key: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_last_search: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_warnings: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_last_warning: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_login_attempts: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_inactive_reason: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0"
    },
    user_inactive_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_posts: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    user_lang: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_timezone: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: "0.00"
    },
    user_dst: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    user_dateformat: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "d M Y H:i"
    },
    user_style: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    user_rank: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    user_colour: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_new_privmsg: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_unread_privmsg: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_last_privmsg: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_message_rules: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    user_full_folder: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "-3"
    },
    user_emailtime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_topic_show_days: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_topic_sortby_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "t"
    },
    user_topic_sortby_dir: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "d"
    },
    user_post_show_days: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_post_sortby_type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "t"
    },
    user_post_sortby_dir: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "a"
    },
    user_notify: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    user_notify_pm: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    user_notify_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_allow_pm: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    user_allow_viewonline: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    user_allow_viewemail: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    user_allow_massemail: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    user_options: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "230271"
    },
    user_avatar: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_avatar_type: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: "0"
    },
    user_avatar_width: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_avatar_height: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_sig: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_sig_bbcode_uid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_sig_bbcode_bitfield: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_from: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_icq: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_aim: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_yim: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_msnm: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_jabber: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_website: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_occ: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_interests: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_actkey: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_newpasswd: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_form_salt: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_new: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    user_reminded: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    user_reminded_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    user_topic_preview: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    user_old_emails: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_vla_start: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    user_vla_till: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'phpbb_users'
  });
};
