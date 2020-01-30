import axios from "axios";


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-joao"

const setTasks = (tasks) => ({
    type: "SET_TASKS",
    payload: {
        tasks,
    }
})


// Action para enviar as tasks para API
export const createTask = (text, day) => async (dispatch) => {
    const data ={
        text,
        day
    }

    try {
        await axios.post(`${baseUrl}`, data)
        dispatch(getTasks())
            window.alert('Task cadastrada com sucesso!')
    }catch(error){
        window.alert('Erro no cadastro!')
    }

}


// Listar Tasks
export const getTasks = () => async (dispatch) => {

    try{
        const response = await axios.get(`${baseUrl}`)
        dispatch(setTasks(response.data))
    } catch (error) {
        window.alert("Erro!")
    }
    
}