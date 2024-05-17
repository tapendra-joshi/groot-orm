const { DataSource } = require("typeorm");

const getDataSource = async(dbConfig) => {
    let dbSource = new DataSource({
        host: dbConfig.host,
        port: dbConfig.port,
        username: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database,
        type: dbConfig.type,
        synchronize: true,
        logging: false,
        entities: [
            require(__dirname + '/entity/UserSchema.js'),
        ],
        migrations: ["src/migration/**/*.js"],
        cli: {
            entitiesDir: "src/entity",
            migrationsDir: "src/migration",
        },
    })
    return dbSource
}


module.exports = {getDataSource: getDataSource}