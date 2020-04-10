import { BaseDatabase } from "./baseDatabase";
import { UserGateway } from "../business/gateways/UserGateway";
import { User } from "../business/entities/user";



export class UserDatabase extends BaseDatabase implements UserGateway {
    private userTable: string = "user";

    // public fromDB(input?: any): User | undefined {
    //     return (
    //         input &&
    //         new User(
    //             input.id,
    //             input.name,
    //             input.email,
    //             input.password,
    //             input.birthdate,
    //             input.photo
    //         )
    //     )
    // }

    public async signUp(user: User): Promise<void> {
        await this.connection.raw(`
        INSERT INTO ${this.userTable} (id,name,email,password,birthdate,photo)
        VALUES(
            '${user.getId()}',
            '${user.getName()}',
            '${user.getEmail()}',
            '${user.getPassword()}',
            '${user.getBirthDate()}',
            '${user.getPhoto()}'
        )
    `);
    }
}



