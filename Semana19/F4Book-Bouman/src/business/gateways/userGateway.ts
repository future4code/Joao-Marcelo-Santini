import { User } from "../entities/users";

export interface UserGateway {
    createUserFollowRelation(adderFriendId: string, friendAddedId: string): Promise<void>;
 
}