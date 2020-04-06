"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const knex_1 = __importDefault(require("knex"));
const app = express_1.default();
app.use(express_1.default.json()); // Linha mágica (middleware)
const connection = knex_1.default({
    client: 'mysql',
    connection: {
        host: 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
        user: 'joao',
        password: 'm2hCAiCQBmyalb7le1KS',
        database: 'bouman-joao'
    }
});
app.get('/', (req, res) => {
    const resposta = {
        endpoints: {
            '/': 'retorna lista com todos os endpoints',
            '/createUser': 'Cria usuario',
            '/updateUser/ID': 'altera o nickname do user usando ID. ',
            '/DelUser?nick=NICKNAME': 'Deleta usuario com o nick passado',
            '/userByName?name=NAME': 'Busca o usuário pelo nome',
            '/getUsersBy/DATA': 'Mostra os usuarios filtrada pela data de nascimento em ordem alfabetica',
            '/createTodo': 'Criar tarefa',
            '/updateTodo/ID': 'altera a terefa pelo ID. Descrição e Data ',
            '/todoToResponsible/id': 'Cadastra usuario responsavel pela tarefa passada pelo ID'
        }
    };
    // Exemplo de retorno de um JSON
    res.send(resposta);
});
//---------------------------------------
// 1- Criar usuario
app.post('/createUser', (req, res) => {
    const nonQuery = connection.insert(req.body).into('users');
    nonQuery.then((result) => {
        res.send(`O usuário ${req.body.name} foi criado`);
    }).catch((err) => {
        res.send(err);
    });
});
// 2- Editar Usuário 
app.put('/updateUser/:id', (request, response) => {
    const querry = connection('users').where('user_id', '=', request.params.id)
        .update({
        nickname: request.body.nickname
    });
    querry.then((result) => {
        response.send(`Atualizado para ${request.body.nickname}`);
    }).catch((error) => {
        response.send(error);
    });
});
// 3- Deletar Usuário 
app.delete('/DelUser', (request, response) => {
    const hasQuerynick = Object.values(request.query).length > 0;
    if (hasQuerynick) {
        const nickToFind = request.query.nick;
        const nonQuery = connection('users').where('nickname', nickToFind).del();
        nonQuery.then((result) => {
            response.send('User deletado');
        }).catch((error) => {
            response.send(error);
        });
    }
});
// 4- Pegar User por nome 
app.get('/userByName', (request, response) => {
    const hasQueryString = Object.values(request.query).length > 0;
    if (hasQueryString) {
        const nameToFind = request.query.name;
        const query = connection.raw(`SELECT name, nickname, email, birth_date from users WHERE name LIKE "%${nameToFind}%"`);
        query.then((result) => {
            response.send(result);
        }).catch((error) => {
            response.send(error);
        });
    }
});
// 5- Pegar todos os users mostra por data , e orderm alfabetica
app.get('/getAllUsers/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = req.query.order;
    const age = req.query.age;
    let query = connection.select("*").from('users');
    if (order) {
        query = query.orderBy("name", order);
    }
    if (age) {
        query = query.where({ "birth_date": age });
    }
    try {
        const result = yield query;
        res.send(result);
    }
    catch (error) {
        res.send(error);
    }
}));
// app.get('/getUsersBy/:dateToCompare', async (request: Request, response: Response) => {
//   const dateToCompare = request.params.dateToCompare;
//   const query = connection.raw(`SELECT name, birth_date FROM users WHERE birth_date < "${dateToCompare}" 
//     order by name ASC`);
//   const result = await query;
//   response.send(result);
// });
// 6- Cadastrar Tarefa
app.post('/createTodo', (req, res) => {
    const nonQuery = connection.insert(req.body).into('todos');
    nonQuery.then((result) => {
        res.send(`A tarefa foi criado`);
    }).catch((err) => {
        res.send(err);
    });
});
// 7 - Alterar tarefa
app.put('/updateTodo/:id', (request, response) => {
    const querry = connection('todos').where('todo_id', '=', request.params.id)
        .update({
        todo_description: request.body.todo_description,
        date_limit: request.body.date_limit
    });
    querry.then((result) => {
        response.send("Atualizad descrição e data");
    }).catch((error) => {
        response.send(error);
    });
});
// 8 - Atribuir responsavel a uma tarefa
app.put('/todoToResponsible/:id', (request, response) => {
    const querry = connection('todos').where('todo_id', '=', request.params.id)
        .update({
        todo_responsible_user_id: request.body.todo_responsible_user_id
    });
    querry.then((result) => {
        response.send("Responsavel cadastrado");
    }).catch((error) => {
        response.send(error);
    });
});
// 9 - Pegar tarefas criadas por um usuário
app.get('getTodosByUser/id/datelimit');
// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
