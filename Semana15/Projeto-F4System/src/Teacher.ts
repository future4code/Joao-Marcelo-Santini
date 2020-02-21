import { User } from "./User";

enum Specialty {
    HTML = "HTML",
    CSS = "CSS",
    JS = "JS",
    React = "React",
    Readux = "Redux",
    Back = "Back",
    OOP = "OOP"
}


export class Teacher implements User {
    name: string
    email: string
    birthDate: string
    specialty: Specialty

    constructor(name: string, email: string, birthDate: string, specialty: Specialty) {
        this.name = name
        this.email = email
        this.birthDate = birthDate
        this.specialty = specialty
    }
}
