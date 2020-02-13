import {getTasks, setTasks} from "./index";
import axios from "axios";

describe('Test setTasks', ()=>{
  test('test actions dispatch da API', async ()=>{
   const tasksMock = [{
       text: "Texto tarefa",
       day: "segunda",
       id: "7rO8bxgrCBM6u2ZjUqar"
   }]
    const dispatchMock = jest.fn()
      axios.get = jest.fn(()=>{
       return {
         data: tasksMock
       } 
    })
    await getTasks()(dispatchMock)
      expect(dispatchMock).toHaveBeenCalledWith(setTasks(tasksMock))
  })

  test("Testa create setTasks action ", () => {
    // Preparação
    const taskDeTeste = "task de teste"
    // Execução
   const action = setTasks(taskDeTeste)
  //  Verificação
  expect(action.type).toEqual("SET_TASKS")
  expect(action.payload).toEqual({tasks:"task de teste"})

  })

})
  

