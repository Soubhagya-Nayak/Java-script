class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    // Setter and Getter
    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
    get password() {
        return this._password.toUpperCase();
    }
    set password(password) {
        this._password = password;
    }
}

const soubhagya = new User("soubhagya@mail.com", "1234abc")
console.log(soubhagya.password);
console.log(soubhagya.email);
