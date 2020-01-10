const initialState = {
  currentProfile: null,
}

const profiles = (state = initialState, action) => {
  switch(action.type){
    case "SET_PROFILE_TO_SWIPE":
      return{...state, currentProfile: action.payload.profile }


    default:
    return state;
  }
}

export default profiles
