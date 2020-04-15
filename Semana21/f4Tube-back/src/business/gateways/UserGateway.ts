import { User } from "../entities/user";


export interface UserGateway {
   signUp(user: User): Promise<void>;
   getUserByEmail(email: string): Promise<User | undefined>
   getUserById(id: string): Promise<User | undefined>;
   updatePassword(userId: string, newPassword: string): Promise<void>;
}