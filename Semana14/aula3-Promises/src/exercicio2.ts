import axios, { AxiosResponse, AxiosRequestConfig, AxiosPromise } from "axios";


const URL: string = "https://jsonplaceholder.typicode.com/posts/"+(process.argv[2])
const URL2: string = "https://jsonplaceholder.typicode.com/posts/"+(process.argv[3])
const URL3: string = "https://jsonplaceholder.typicode.com/posts/"+(process.argv[4])



axios.get(URL).then ((resp: AxiosResponse)=>{
    console.log(resp.data.title);
}).catch((error:Error)=>{
    console.log(error);
})

axios.get(URL2).then ((resp: AxiosResponse)=>{
    console.log(resp.data.title);
}).catch((error:Error)=>{
    console.log(error);
})

axios.get(URL3).then ((resp: AxiosResponse)=>{
    console.log(resp.data.title);
}).catch((error:Error)=>{
    console.log(error);
})