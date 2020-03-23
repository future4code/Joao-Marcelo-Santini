import { BaseDB } from "./baseDatabase";
import { UserGateway } from "../business/gateways/userGateway";
import { User } from "../business/entities/users";


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


}