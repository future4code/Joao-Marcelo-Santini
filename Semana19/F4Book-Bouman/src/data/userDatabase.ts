import { BaseDB } from "./baseDatabase";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/users";
import { Relation } from "../business/entities/relations";


export class UserDB extends BaseDB implements UserGateway {
    private userTable = "users";
    private relationsTable = "users_relations"

    private mapDBUserToUser(input?: any): User | undefined {
        return (
            input && new User(
                input.id,
                input.name,
                input.email,
                input.password
            )
        )
    };
    
    private mapDBRelationToRelation(input?: any): Relation | undefined {
        return (
            input && new Relation(
                input.adderFriendId,
                input.friendAddedId
            )
        )
    };
    


    public async signUp(user: User): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.userTable} (id, name, email, password) 
            VALUES (
                '${user.getId()}',
                '${user.getName()}',
                '${user.getEmail()}',
                '${user.getPassword()}'
            )
        `)
    };

    public async getUserByEmail(email: string): Promise<User | undefined> {
        const user = await this.connection.raw(`
           SELECT * FROM ${this.userTable} WHERE email = '${email}'
        `);

        if (!user[0][0]) {
            return undefined
        }

        return this.mapDBUserToUser(user[0][0])
    };

    async createUserFollowRelation(adderFriendId: string, friendAddedId: string): Promise<void> {
        await this.connection.raw(`
           INSERT INTO ${this.relationsTable} (adderFriendId, friendAddedId)
           VALUES ('${adderFriendId}', '${friendAddedId}')
        `)
    };

    async userUnfollowRelation(adderFriendId: string, friendAddedId: string): Promise<void> {
        await this.connection.raw(`
         DELETE FROM ${this.relationsTable}
         WHERE adderFriendId='${adderFriendId}' AND friendAddedId='${friendAddedId}'
         `)
    }

    async getUserRelationsData(adderFriendId: string, friendAddedId: string): Promise<Relation | undefined> {
        const result = await this.connection.raw(`
        SELECT * 
        FROM ${this.relationsTable} 
        WHERE adderFriendId='${adderFriendId}' AND friendAddedId='${friendAddedId}'  
        `)
        if (!result[0][0]){
            return undefined
        }
        return this.mapDBRelationToRelation(result[0][0])
    }


}