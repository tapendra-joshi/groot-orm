class User {
    constructor(id,firstName, lastName, email, password, settingId) {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.setting = settingId
    }
}

module.exports = User