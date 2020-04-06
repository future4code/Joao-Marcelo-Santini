import knex from "knex";
import { User } from "../business/entities/user";
import { request } from "http";
import { stringify } from "querystring";

export class UserDB {
  private connection = knex({
    client: "mysql",
    connection: {
      host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
      port: 3306,
      user: "joao",
      password: "m2hCAiCQBmyalb7le1KS",
      database: "bouman-joao"
    }
  });

  private userTableName = "users2";

  private mapDateToDbDate(input: Date): string {
    const year = input.getFullYear();
    const month = input.getMonth() + 1;
    const date = input.getDate();
    return `${year + "-" + month + "-" + date}`;
  }

  private mapDbDateToDate(input: string): Date {
    return new Date(input);
  }

  private mapDbUserToUser(input?: any): User | undefined {
    return (
      input &&
      new User(
        input.id,
        input.name,
        input.email,
        this.mapDbDateToDate(input.date)
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    await this.connection.raw(`
    INSERT INTO ${this.userTableName} (id, name, email, birthDate) 
    VALUES(
	  '${user.getId()}',
	  '${user.getName()}',
	  '${user.getEmail()}',
    STR_TO_DATE('${this.mapDateToDbDate(user.getBirthDate())}', '%Y-%m-%d')
);
    `);
  }

  public async getAllUsers(): Promise<User[]> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName}`
    );

    return result[0].map((res: any) => this.mapDbUserToUser(res)!);
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName} WHERE email =${email}`
    )
    return this.mapDbUserToUser(result[0][0])
  }

  public async getUserById(id: string): Promise<User | undefined> {
    const result = await this.connection.raw(
      `SELECT * FROM ${this.userTableName} WHERE id='${id}'`
    )

    if(!result[0][0]){
      return undefined
    }
    return new User(
      result[0][0].id,
      result[0][0].name,
      result[0][0].email,
      new Date(result[0][0].birthDate)
    )

  }


  public async updateUser(user: User): Promise<void> {
    await this.connection.raw(`
    UPDATE ${this.userTableName}
    SET 
      name='${user.getName()}',
      email='${user.getEmail()}',
      birthDate=STR_TO_DATE('${this.mapDateToDbDate(
      user.getBirthDate()
    )}', '%Y-%m-%d')
    WHERE id='${user.getId()}';
    `);
  }

  
}
