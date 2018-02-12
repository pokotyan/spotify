const tableName = 'drinks';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    tableName,
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
      },
      maker: {
        type: Sequelize.STRING,
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
