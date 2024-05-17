const { EntitySchema } = require("typeorm");
module.exports = new EntitySchema({
    name: "Setting",
    tableName: "settings",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true,
        },
        IsNotificationEnabled: {
            type: "bool",
        },
        IsNewDashboardEnabled: {
            type: "bool",
        },
        Timezone: {
            type: "varchar",
        },
    },
});
