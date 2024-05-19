const { EntitySchema } = require("typeorm");
const Setting = require("../model/Setting")

module.exports = new EntitySchema({
    name: "Setting",
    target: Setting,
    tableName: "settings",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        isNotificationEnabled: {
            type: "boolean",
        },
        isNewDashboardEnabled: {
            type: "boolean",
        },
        timezone: {
            type: "varchar",
        }
    },
    relations: {
        user: {
            target: "User",
            type: "one-to-one",
            inverseSide: "setting"
        }
    }
});
