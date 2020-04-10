import { v4 } from "uuid";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from "../../entities/user";
import { UserGateway } from "../../gateways/UserGateway";

export class SignUpUC {
    constructor(private userGateway: UserGateway) { }

    public async execute(input: SignUpUCInput): Promise<SignUpUCOutput | undefined> {
        try {
            const userId = v4();

            if (input.password.length < 3) {
                throw new Error("Password precisa ser maior que 3 caracteres.")
            }

            else if (input.email.indexOf("@") === -1) {
                throw new Error("Invaldi Email")
            }

            else {
                const encryPassword = await bcrypt.hash(input.password, 10)
                const newUser = new User(userId, input.name, input.email, encryPassword, input.birthdate, input.photo)

                await this.userGateway.signUp(newUser)

                const jwtSecretKey: string = process.env.SECRET || "";
                const token = jwt.sign({ id: newUser.getId() }, jwtSecretKey, {
                    expiresIn: '2h'
                })
                return {
                    message: "Usuario criado com sucesso!",
                    token: token
                }
            }
        } catch (err) {
            throw new Error(err.message)
        }
    };
};

export interface SignUpUCInput {
    name: string;
    email: string;
    birthdate: Date;
    password: string;
    photo: string;
}


export interface SignUpUCOutput {
    message: string
    token: string
}