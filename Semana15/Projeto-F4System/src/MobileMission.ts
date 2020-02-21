import { Mission } from "./Mission";

export class MobileMission extends Mission {
    protected numberClass: number;

    constructor(numberClass: number, startDate: string, endDate: string) {
        super(startDate, endDate)

        this.numberClass = numberClass
    }
}