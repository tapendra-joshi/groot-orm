const { EntitySchema } = require("typeorm");
const User = require("../model/User");

module.exports = new EntitySchema({
    name: "User",
    target: User,
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        firstName: {
            type: "varchar",
        },
        lastName: {
            type: "varchar",
        },
        email: {
            type: "varchar",
        },
        password: {
            type: "varchar",
        },
    },
});
 


