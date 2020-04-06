import { UserDB } from "../../data/userDataBase";

export class EditUsersUC {
    constructor(private userDB: UserDB) {}

    public async execute(input: EditUserUCInput): Promise<EditUserUCOutput> {
       const user =  await this.userDB.getUserById(input.id)

       if(!user){
           throw new Error("User no found")
       }

       if(input.name !== undefined){
           if(input.name === ""){
               throw new Error("Invalid Name")
           }

           user.setName(input.name)
       }
        if(input.email !== undefined){
            if(input.email.indexOf("@")=== -1){
                throw new Error("Invalid email")
            } 
            
            user.setEmail(input.email)
       }

       await this.userDB.updateUser(user)

       return {
           message: "User updated successfully"
       }
    }
}

export interface EditUserUCInput {
    id: string;
    name: string;
    email: string;
}

export interface EditUserUCOutput {
    message: string
}