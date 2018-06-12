const tableName = 'users';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    tableName,
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      spotify_id: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      access_token: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      refresh_token: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    },
  ),

  down: queryInterface => queryInterface.dropTable(tableName),
};
