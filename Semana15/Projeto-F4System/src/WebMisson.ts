import { Mission } from "./Mission";
import { FileManager } from "./FileManager";

export class WebMission extends Mission {
    protected namePatrono: string;

    constructor(namePatrono: string, startDate: string, endDate: string) {
        super(startDate, endDate)

        this.namePatrono = namePatrono
    }

    public createMission(namePatrono: string, startDate: string, endDate: string): void {
        this.saveMission(new WebMission(namePatrono, startDate, endDate))
    }

    public saveMission(mission:Mission){
        const fileManager = new FileManager("F4Class.json")
        const data = fileManager.readFile();
        data.mission.push(mission)
        fileManager.writeFile(data);
    }
}