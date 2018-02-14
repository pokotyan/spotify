const TABLE_NAME = 'increments';

module.exports = (sequelize, DataTypes) => {
  const table = sequelize.define(TABLE_NAME, {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    count: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE
    },
    updated_at: {
      type: DataTypes.DATE
    }
  }, {
    underscored: true
  });
  return table;
};
