class Setting {
    constructor(id,isNotificationEnabled, isNewDashboardEnabled, timezone) {
        this.id = id
        this.isNotificationEnabled = isNotificationEnabled;
        this.isNewDashboardEnabled = isNewDashboardEnabled;
        this.timezone = timezone;
    }
}

module.exports = Setting