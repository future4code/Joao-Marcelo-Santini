import { BaseDatabase } from "./baseDatabase";
import { UserGateway } from "../business/gateways/UserGateway";
import { User } from "../business/entities/user";



export class UserDatabase extends BaseDatabase implements UserGateway {
    private userTable: string = "user";

    public mapUserToDBUser(input?: any): User | undefined {
        return (
            input &&
            new User(
                input.id,
                input.name,
                input.email,
                input.password,
                input.birthdate,
                input.photo
            )
        )
    }

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

    public async getUserByEmail(email:string): Promise<User | undefined> {
        const user = await this.connection.raw(`
            SELECT * FROM ${this.userTable} WHERE email = '${email}'
        `);
        if (!user[0][0]) {
            return undefined
        }

        return this.mapUserToDBUser(user[0][0])
    };


    public async getUserById(id: string): Promise<User | undefined> {
        const user = await this.connection.raw(`
          SELECT * FROM ${this.userTable} WHERE id = '${id}'
        `);
    
        if (!user[0][0]) {
          return undefined;
        }
    
        return this.mapUserToDBUser(user[0][0])
      }


      public async updatePassword(userId: string, newPassword: string): Promise<void> {
        await this.connection.raw(`
          UPDATE ${this.userTable}
          SET password = '${newPassword}'
          WHERE id = '${userId}'
        `);
      }
    
    


}

