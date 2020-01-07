const initialState = {
    listaTarefas: []
};

const lista = (state = initialState, action) => {
    switch(action.type){
        case "ADD_TAREFA":
            return { ...state, listaTarefas:[...state.listaTarefas, action.payload.novaLista] };
        default:
            return state;
    }
};