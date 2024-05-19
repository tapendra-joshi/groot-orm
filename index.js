require("reflect-metadata");


class MyOrmLib {

    async initialize(dbConfig) {
        console.log("initializing",dbConfig)
        process.env.host= dbConfig.host
        process.env.port= dbConfig.port
        process.env.type= dbConfig.type
        process.env.username= dbConfig.username
        process.env.password= dbConfig.password
        process.env.database= dbConfig.database
        const dataSource = require("./src/ormconfig");
        this.connection = await dataSource.initialize();
        await this.connection.runMigrations();
        await this.connection
    }

    async getRepository(entity) {
        if (!this.connection) {
            throw new Error("Connection not established. Call initialize() first.");
        }
        return this.connection.getRepository(entity);
    }
}

module.exports = MyOrmLib;
