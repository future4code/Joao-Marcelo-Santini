import { Relation } from "../entities/relations";


export interface UserGateway {
    createUserFollowRelation(adderFriendId: string, friendAddedId: string): Promise<void>;
    getUserRelationsData(adderFriendId: string, friendAddedId: string): Promise<Relation | undefined>;
    userUnfollowRelation(adderFriendId: string, friendAddedId: string): Promise<void>;
}