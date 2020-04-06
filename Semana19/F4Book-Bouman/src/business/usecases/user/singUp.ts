import { v4 } from 'uuid';
import { UserDB } from '../../../data/userDatabase';
import { User } from '../../entities/users';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';


export class SingUpUC {
    constructor(private db: UserDB) { }

    public async execute(input: SignUpUCInput): Promise<SignUpUCOutput> {
        try {
            const userId = v4();


            if (input.password.length < 6) {
                throw new Error("Password precisa de no mínimo 6 caracteres")
            } else {
                const encryPassword = await bcrypt.hash(input.password, 10)
                const newUser = new User(userId, input.name, input.email, encryPassword)

                await this.db.signUp(newUser)

                const jwtSecretKey: string = process.env.SECRET || "";
                const token = jwt.sign({ id: newUser.getId() }, jwtSecretKey, {
                    expiresIn: '1h'
                })

                return {
                    message: "Usuário criado com sucesso!",
                    token: token
                }
            }
        } catch (err) {
            throw new Error(err.message)
        }
    };
};

export interface SignUpUCInput {
    name: string,
    email: string,
    password: string

}

export interface SignUpUCOutput {
    message: string
    token: string
}