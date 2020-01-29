const initialState = {
    data: {}
};

export const task = ( state = initialState, action ) => {
    switch(action.type){
        case "CREATE_TASK":
            return {...state, data: action.payload.task}

            default:
                return state;
    }
}

export default task;