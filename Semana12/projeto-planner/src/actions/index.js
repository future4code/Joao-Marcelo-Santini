import axios from "axios";


const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/generic/planner-bouman-joao"


const setCreateTask = (task) => ({
    type: "CREATE_TASK",
        payload:{
            task,
        }
})

export const createTask = (text, day) => async (dispatch) => {
    const data ={
        text,
        day
    }

    try {
        const response = await axios.post(`${baseUrl}`, data)
        dispatch(setCreateTask())
            alert('Task cadastrada com sucesso!')
    }catch(error){
        window.alert('Erro no cadastro!')
    }

}