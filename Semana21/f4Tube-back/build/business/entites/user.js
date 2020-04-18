"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, name, birthdate, email, password, photo) {
        this.id = id;
        this.name = name;
        this.birthdate = birthdate;
        this.email = email;
        this.password = password;
        this.photo = photo;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getBirthdate() {
        return this.birthdate;
    }
    setBirthdate(birthdate) {
        this.birthdate = birthdate;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getPhoto() {
        return this.photo;
    }
    setPhoto(photo) {
        this.photo = photo;
    }
}
exports.User = User;
