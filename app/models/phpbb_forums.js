/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_forums', {
    forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    parent_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    left_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    right_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    forum_parents: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    forum_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    forum_desc_bitfield: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_desc_options: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "7"
    },
    forum_desc_uid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_link: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_style: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    forum_image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_rules: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    forum_rules_link: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_rules_bitfield: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_rules_options: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "7"
    },
    forum_rules_uid: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_topics_per_page: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    forum_type: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    forum_status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "0"
    },
    forum_posts: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    forum_topics: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    forum_topics_real: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    forum_last_post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    forum_last_poster_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    forum_last_post_subject: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_last_post_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    forum_last_poster_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_last_poster_colour: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    forum_flags: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "32"
    },
    forum_options: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0"
    },
    display_subforum_list: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    display_on_index: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    enable_indexing: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    enable_icons: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    enable_prune: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    prune_next: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    prune_days: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    prune_viewed: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    prune_freq: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_author_moderation: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_forums'
  });
};
