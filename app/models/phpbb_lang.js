/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_lang', {
    lang_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lang_iso: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    lang_dir: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    lang_english_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    lang_local_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    lang_author: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    }
  }, {
    tableName: 'phpbb_lang'
  });
};
