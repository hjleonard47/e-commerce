class User extends Address{
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

class Address {
    constructor(id, street, city){
        this.id = id;
        this.street = street;
        this.city = city;
    }
}