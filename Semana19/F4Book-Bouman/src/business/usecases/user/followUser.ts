import { UserGateway } from "../../gateways/userGateway";


export class FollowUserUC {
    constructor(private userGateway: UserGateway) { }
    async execute(input: FollowUserInput) {
        await this.userGateway.createUserFollowRelation(
            input.adderFriendId, 
            input.friendAddedId)
    }
}

interface FollowUserInput {
    adderFriendId: string,
    friendAddedId: string
}