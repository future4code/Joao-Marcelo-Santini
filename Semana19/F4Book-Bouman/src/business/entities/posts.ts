export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private create_date: Date,
        private type: PostType,
        private user_id: string
    ){}
    public getId(): string{
        return this.id
    }
    public setId(id: string): void{
        this.id = id
    }
    public getPhoto(): string{
        return this.photo
    }
    public setPhoto(photo: string): void{
        this.photo = photo
    }
    public getDescription(): string{
        return this.description
    }
    public setDescription(description: string): void{
        this.description = description
    }
    public getCreationDate(): Date{
        return this.create_date
    }
    public setCreationDate(creationDate: Date): void{
        this.create_date = creationDate
    }
    public getType(): PostType{
        return this.type
    }
    public setType(type: PostType): void{
        this.type = type
    }
    public getUserId(): string{
        return this.user_id
    }
    public setUserId(userId: string): void{
        this.user_id = userId
    }
}
export enum PostType{
    normal = "normal",
    event = "event"
}