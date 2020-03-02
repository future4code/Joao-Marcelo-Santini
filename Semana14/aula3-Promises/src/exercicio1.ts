// const arquivosTextos = "../textos";

// fs.readdir(arquivosTextos, (err: Error, files: Buffer)=>{
//     files.forEach(file => {
//         console.log(file);
//     })
// })

//////////////////////////////////////////////////////////////////////
import { readFile, readdir } from "fs";

// const fs = require("fs");

const arquivosTextos = "../textos"

const promiseReddir = new Promise <string[]> ((resolve , reject) => {
    readdir(arquivosTextos, (err: Error, files: string[])=>{
        if(err) 
            reject(err)
    {
        resolve(files)
    }
    })
});

const init = async() => {
    try{
        const listaArquivos: string[] = (await promiseReddir);
        for(let i: number = 0; i < listaArquivos.length; i++) {
            let file: string = ""
            readFile(`../textos/${listaArquivos[i]}`, (err: Error, files: Buffer ) => {
                if(err){
                    console.error(err)
                } else {
                    file = files.toString()
                    console.log(file)
                }
            })
        }
    } catch(error){
        console.error("Promise Falhou", error) 
    }
}
init();

// fs.readdir('../textos',(err: Error, files: Buffer)=>{
//     if(err) return console.error(err);
//     console.log(files.join(' '));
// })
