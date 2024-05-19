const { EntitySchema } = require("typeorm");
const User = require("../model/User");

module.exports = new EntitySchema({
    name: "User",
    target: User,
    tableName: "users",
    columns: {
        id: {
            primary: true,
            type: "bigint",
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
            unique: true
        },
        password: {
            type: "varchar",
        },
    },
    indices: [
        {
            name: "IDX_USER_EMAIL",
            columns: ["email"]
        }
    ],
    relations: {
        setting: {
            target: "Setting",
            type: "one-to-one",
            joinColumn: true,
            cascade: true
        }
    }
});
 


