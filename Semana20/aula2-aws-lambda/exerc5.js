

const knex = require("knex");
const { v4 } = require('uuid');

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.HOST,
        port: 3306,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
})


exports.handler = async (event) => {
    const id = v4();
    const personagensTableName = "Personagens"
    const result = await connection.raw(`
        INSERT INTO ${personagensTableName}(id, nomeProprio, nomeDoDesenho, imagem)
        VALUES('${id}', '${event.nomeProprio}', '${event.nomeDoDesenho}', '${event.imagem}')
    `)
    if (!event.nomeProprio){
        return {
            statusCode: 400,
            body: JSON.stringify("Name not found")
        }
    }
    if (!event.nomeDoDesenho){
        return {
            statusCode: 400,
            body: JSON.stringify("drawingName not found")
        }
    }
    if (!event.imagem){
        return {
            statusCode: 400,
            body: JSON.stringify("photo not found")
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify("Person created successfully")
    }
}