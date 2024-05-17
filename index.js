require("reflect-metadata");
const { getDataSource} = require("./src/ormconfig");

class MyOrmLib {

    async initialize(dbConfig) {
        console.log("initializing",dbConfig)
        const dbSource = await getDataSource(dbConfig)
        this.connection = dbSource.initialize();
    }

    async getRepository(entity) {
        if (!this.connection) {
            throw new Error("Connection not established. Call initialize() first.");
        }
        return this.connection.getRepository(entity);
    }
}

module.exports = MyOrmLib;
