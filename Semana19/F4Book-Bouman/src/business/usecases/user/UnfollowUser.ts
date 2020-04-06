import { UserGateway } from "../../gateways/userGateway";



export class UnfollowUserUC {
    constructor(private userGateway: UserGateway) { }
    async execute(input:  UnfollowUserInput): Promise<UnfollowUserOutput>  {
        const relations = await this.userGateway.getUserRelationsData(input.adderFriendId, input.friendAddedId)
        if(!relations){
            throw new Error("Não é seguido!")
        }
        await this.userGateway.userUnfollowRelation(
            input.adderFriendId, 
            input.friendAddedId)

        return{
            message: "Não está mais seguindo.!"
        }

    }
}

interface UnfollowUserInput {
    adderFriendId: string,
    friendAddedId: string
}

interface UnfollowUserOutput{
    message: string
}
