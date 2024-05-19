const { DataSource } = require("typeorm");
const path = require('path');
const {glob} = require('glob');

function getMigrationsPath() {
    console.log(path.resolve(__dirname,'migration'));
    const pathss = glob.sync("\*.js", {cwd:path.resolve(__dirname,'migration')});
    console.log(pathss)
    var filePaths = [];
    pathss.map((m)=> {
        filePaths.push(path.join(__dirname,'migration',m))
    })
    console.log("filePaths",filePaths)
    return filePaths
  }

const AppDataSource = new DataSource({
    host: process.env.host,
    port: process.env.port,
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    type: process.env.type,
    synchronize: false,
    logging: false,
    entities: [
        require(__dirname + '/entity/UserSchema.js'),
        require(__dirname + '/entity/SettingSchema.js'),
    ],
    migrations: getMigrationsPath(),
    
});
module.exports = AppDataSource