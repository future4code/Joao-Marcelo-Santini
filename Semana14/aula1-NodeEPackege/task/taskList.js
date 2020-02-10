const fs = require('fs');
const data = `${process.argv[3]}\n`;
const fileName = `${process.argv[2]}`;

try{
    fs.appendFileSync(fileName, data, 'utf8');
    console.log(`Arquivo Criado`)
} catch(error){
    console.error(error)
}