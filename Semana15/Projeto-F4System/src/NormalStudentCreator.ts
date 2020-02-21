import { CreateStudent } from "./CreateStudent";
import { Student } from "./Student";
import { FileManager } from "./FileManager";


export class NormalStudentCreator implements CreateStudent {
    public create(name: string, email: string, birthDate: string) {
        this.saveStudent(new Student(name, email, birthDate))
    }

    protected saveStudent(student:Student){
        const fileManager = new FileManager("F4Class.json")
        const data = fileManager.readFile();
        data.student.push (student)
        fileManager.writeFile(data);  
    }
}