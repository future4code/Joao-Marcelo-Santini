import { User } from "./User";
import { Mission } from "./Mission";

export class Student implements User {
    name: string
    email: string
    birthDate: string
    mission: Mission

    constructor(name: string, email: string, birthDate: string, ) {
        this.name = name
        this.email = email
        this.birthDate = birthDate
    }
}
