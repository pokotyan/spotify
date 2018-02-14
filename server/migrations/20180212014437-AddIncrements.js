const tableName = 'increments';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    tableName,
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    }
  ),

  down: (queryInterface, Sequelize) => queryInterface.dropTable(tableName)
};
