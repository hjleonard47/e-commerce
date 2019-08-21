class User {
    constructor(id, firstname, lastname, type, gender, email, password){
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.type = type;
        this.gender = gender;
        this.timestamp = Date.now();
        this.email = email;
        this.password = password;
    }
}

module.exports = User;