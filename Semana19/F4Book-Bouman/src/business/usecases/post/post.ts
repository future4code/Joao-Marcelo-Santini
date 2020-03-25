import { v4 } from 'uuid';
import { PostGateway } from '../../gateways/postGateway';
import { PostType, Post } from '../../entities/posts';


export class PostUC {
    constructor(private postDB: PostGateway) { }

    public async execute(input: PostUCInput): Promise<PostUCOutput> {
        try {
            const id = v4();
            let type = PostType.normal;

            if (input.type === "event") {
                type = PostType.event
            } else if (input.type !== "normal") {
                throw new Error("Tipo Invalido")
            }

            const post = new Post (
                id,
                input.photo,
                input.description,
                new Date(),
                type,
                input.user_id
            )

            await this.postDB.createPost(post)

            return{
                message: "Post Criado!"
            }

        } catch (err) {
            throw new Error(err.message)
        }

    };
};


export interface PostUCInput {
    photo: string,
    description: string,
    type: string,
    user_id: string

}

export interface PostUCOutput {
    message: string
}