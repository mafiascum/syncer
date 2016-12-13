/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_attachments', {
    attach_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    post_msg_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    in_message: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    poster_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    is_orphan: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    physical_filename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    real_filename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    download_count: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: "0"
    },
    attach_comment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    extension: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    filesize: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      defaultValue: "0"
    },
    filetime: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    thumbnail: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'phpbb_attachments'
  });
};
