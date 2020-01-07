export const AddTarefaAction = novaTarefa => {
    return{
        type: "ADD_TAREFA",
        payload: {
            novaTarefa: [novaTarefa],
            completo: false
        }
    };
};










// const addTarefaActionCreator = () =>{
//   type: "ADD_Tarefa",
//   payload:{
//     tarefa: tarefa
//     id: tarefaID++,
//     completo: false
//   }
// }

// const filtroTarefa = () => {
//   type: 'FILTRO_TAREFA',
//   payload:{
//     filtro
//   }
// }

// const estadoTarefa = () => {
//   type: 'ESTADO_TAREFA'
//   payload: id,
//   completo: ,
// }

// const FiltrarPorTarefa = () => {
//   TODAS_TAREFAS: 'TODAS_TAREFAS',
//   COMPLETAS_TAREFAS: 'COMPLETAS_TAREFAS',
//   ATIVAS_TAREFAS:'ATIVAS_TAREFAS'
// }


// const DeletarTarefa = () {
//   type: 'DELETAR_TAREFA'
// }
