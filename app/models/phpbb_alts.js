/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phpbb_alts', {
    main_user_id: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    },
    alt_user_id: {
      type: DataTypes.INTEGER(9),
      allowNull: false
    }
  }, {
    tableName: 'phpbb_alts'
  });
};
