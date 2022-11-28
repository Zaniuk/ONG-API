module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("Members",
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                image: {
                    type: Sequelize.BLOB("long"),
                },
                rol: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                description: {
                    type: Sequelize.STRING(750),
                    allowNull: false
                },
                createdAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                },
                updatedAt: {
                    allowNull: false,
                    type: Sequelize.DATE
                }
            }
        )
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('Members');
    }
}