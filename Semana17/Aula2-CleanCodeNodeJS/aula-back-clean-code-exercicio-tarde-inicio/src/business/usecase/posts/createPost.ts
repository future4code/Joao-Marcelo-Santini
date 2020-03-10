import { PostDB } from "../../../data/postDataBase";
import { Post, PostType } from "../../entities/post";
import { InvalidParameterError } from "../../error/InvalidParameterError";
import { v4 } from "uuid";

export class CreatePostUC {
  constructor(private db: PostDB) {}

  public async execute(input: CreatePostUCInput): Promise<CreatePostUCOutput> {
    const id = v4();
    let type = PostType.normal;
    if (input.type === "event") {
      type = PostType.event;
    } else if (input.type !== "normal") {
      throw new InvalidParameterError("Invalid type");
    }

    const post = new Post(
      id,
      input.title,
      input.content,
      type,
      input.userId,
      input.image
    );

    await this.db.createPost(post);

    return {
      message: "Post created successfully"
    };
  }
}

export interface CreatePostUCInput {
  title: string;
  content: string;
  type: string;
  userId: string;
  image?: string;
}

export interface CreatePostUCOutput {
  message: string;
}


// I: Exite 2 tipos de Post, o normal e o evento. São representados atraves de um Enum PostType, que possue 2 valores. 
// II: Ele valida o tipo dos Post. O Post entra com valor inicial de normal, ele chega se é evento, se não for checa se é normal, se não for normal retorna um erro de "Invalid Type" .
// III: Porque ela serve de modelo para outras classes. Guarda as informações em uma classe "BaseDB" que é usada para connectar ao servidor.
// IV: Ele recebe o postDataBase, para que consiga enviar as informações na hora de criar o post.
// V: Seria o body, que recebe os dados, para enviar ao Banco de dados. 
// VI: Vem da interfacew CreatePostUCInput
// VII: Da classe post que esta dentro da entities.
// VIII: Permite a pessoa criar post com imagem ou sem.
