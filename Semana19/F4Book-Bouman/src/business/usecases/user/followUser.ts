import { UserGateway } from "../../gateways/userGateway";


export class FollowUserUC {
    constructor(private userGateway: UserGateway) { }
    async execute(input: FollowUserInput): Promise<FollowUserOutput> {
        const relations = await this.userGateway.getUserRelationsData(input.adderFriendId, input.friendAddedId)
        if(relations){
            throw new Error("Usuário ja é seguido!")
        }
        await this.userGateway.createUserFollowRelation(
            input.adderFriendId,
            input.friendAddedId)
        
        return{
            message: "Usuário seguido com sucesso!"
        }
    }
}

interface FollowUserInput {
    adderFriendId: string,
    friendAddedId: string
}

interface FollowUserOutput {
    message: string
}
