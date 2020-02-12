"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const URL = "https://jsonplaceholder.typicode.com/posts/" + (process.argv[2]);
const URL2 = "https://jsonplaceholder.typicode.com/posts/" + (process.argv[3]);
const URL3 = "https://jsonplaceholder.typicode.com/posts/" + (process.argv[4]);
axios_1.default.get(URL).then((resp) => {
    console.log(resp.data.title);
}).catch((error) => {
    console.log(error);
});
axios_1.default.get(URL2).then((resp) => {
    console.log(resp.data.title);
}).catch((error) => {
    console.log(error);
});
axios_1.default.get(URL3).then((resp) => {
    console.log(resp.data.title);
}).catch((error) => {
    console.log(error);
});
//# sourceMappingURL=exercicio2.js.map