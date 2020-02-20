import { FileManager } from "./FileManager"
import { Post } from "./Posts";
import { PostCreator } from "./PostCreator";


export class NormalPostCreator implements PostCreator {
    public create(text: string, author: string) {
        this.validateInput(text, author);
        this.savePost(new Post(text, author, new Date()))
    }

    protected savePost(post:Post){
        const fileManager = new FileManager("posts.json") 
        const data = fileManager.readFile();
        data.posts.push(post);
        fileManager.writeFile(data);
    }

    protected validateInput(text: string, author: string){
        if(!text || !author){
            throw new Error("Erro!")
        }
    }

}