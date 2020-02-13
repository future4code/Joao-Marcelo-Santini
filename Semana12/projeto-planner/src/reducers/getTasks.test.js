import { setTasks } from "../actions"
import tasks from "./getTasks"

describe("Testa o getTasks reducer", ()=>{
    test("Testar se o SET_TASKS", ()=>{
        const currentState ={
            allTasks: []
        }
        const action = setTasks(["Texto teste 1","Texto Teste 2"])
        
        const newState = tasks(currentState,action)

        expect(newState.allTasks).toHaveLength(2)
    })
})