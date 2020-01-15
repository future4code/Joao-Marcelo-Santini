const initialState = {

   allTrips: [],

};


export const trips = ( state = initialState, action) => {
    switch(action.type){
        case "SET_TRIPS":
            return {...state, allTrips: action.payload.trips}

        default:
            return state;
    }
}

export default trips;