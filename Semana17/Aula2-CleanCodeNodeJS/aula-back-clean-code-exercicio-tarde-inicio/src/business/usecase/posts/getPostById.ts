import { PostDB } from "../../../data/postDataBase";
import { PostType } from "../../entities/post";

export class GetPostByIdUC {
  constructor(private db: PostDB) { }

  public async execute(input: GetPostByIdUCInput): Promise<GetPostByIdUCOutput> {
   
    const post = await this.db.getPost(input.id)

    if(!post) {
      throw new Error("Post not found")
    }
    
    return {
      id: post.getId(),
      title: post.getTitle(),
      content: post.getContent(),
      type: post.getType(),
      image: post.getImage(),
      userId: post.getUserId(),
      userName: post.getUser().getName()
    }
  }
}

export interface GetPostByIdUCInput {
  id: string;
}

export interface GetPostByIdUCOutput {
  id: string;
  title: string;
  content: string;
  image?: string;
  type: PostType;
  userId: string;
  userName: string;
}
