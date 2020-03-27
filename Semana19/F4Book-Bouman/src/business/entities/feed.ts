import { Post, PostType } from "./posts";


export class Feed extends Post {
    constructor(
        id: string,
        photo: string,
        description: string,
        create_date: Date,
        type: PostType,
        user_id: string,
        private name: string
    ) {
        super(id, photo, description, create_date, type, user_id)
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void{
        this.name = name
    }
}