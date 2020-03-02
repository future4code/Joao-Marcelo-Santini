import * as moment from "moment";
import { readFile, writeFile } from "fs";
import { resolve } from "dns";
import { rejects } from "assert";

moment.locale('pt-br')

type evento = {
    nome: string,
    inicio: Date,
    fim: Date,
    descricao: string,
};

type eventoDados = {
    eventList: evento[]
}

const eventCadastro: evento = {
    nome: process.argv[2],
    inicio: new Date (process.argv[3]),
    fim: new Date  (process.argv[4]),
    descricao: process.argv[5],
}

const jsonCalendarData: string = "../calendarData.json";

const getEventList = async () => {
    const getCalendarJson: Promise<string> = new Promise ((resolve, rejects)=>{
        readFile(jsonCalendarData, ( err: Error, data: Buffer )=>{
            if(err){
                rejects(err);
                return;
            }
            console.log(data);
            resolve(data.toString());
        });
    })

    const calendarEvent: string = await getCalendarJson

    const eventsObjects: eventoDados = JSON.parse(calendarEvent)

    return eventsObjects;
}

getEventList().then((eventsObject: any )=> console.log(eventsObject))


