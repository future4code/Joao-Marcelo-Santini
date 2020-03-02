import { Teacher } from "./Teacher"
import { Student } from "./Student"

export abstract class Mission {
    protected startDate: string
    protected endDate: string
    protected teacher: Teacher[]
    protected students: Student[]

    constructor(startDate: string, endDate: string) {
        this.startDate = startDate
        this.endDate = endDate
    }
}