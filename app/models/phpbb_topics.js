/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_topics', {
    topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    forum_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    icon_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_attachment: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    topic_approved: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    topic_reported: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    topic_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    topic_poster: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    topic_time_limit: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    topic_views: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_replies: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_replies_real: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_status: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    topic_type: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    topic_first_post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_first_poster_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    topic_first_poster_colour: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    topic_last_post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_last_poster_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_last_poster_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    topic_last_poster_colour: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    topic_last_post_subject: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    topic_last_post_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    topic_last_view_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    topic_moved_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_bumped: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    topic_bumper: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    poll_title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    poll_start: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    poll_length: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    poll_max_options: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "1"
    },
    poll_last_vote: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    poll_vote_change: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    is_private: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "0"
    },
    autolock_time: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    autolock_input: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: ""
    }
  }, {
    tableName: 'phpbb_topics'
  });
};
