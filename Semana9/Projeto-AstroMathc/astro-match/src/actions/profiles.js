import axios from 'axios'


export const clearSwipes = () => async (dispatch) => {
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao/clear')
};



const setProfileToSwipe = (profile) => ({
	type: "SET_PROFILE_TO_SWIPE",
	payload: {
		profile,
	}
})


export const fetchProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao/person');

	dispatch(setProfileToSwipe(response.data.profile))
	
}


export const choosePerson = (id, choice) => async (dispatch) => {
	if(!id)
	{
		dispatch(fetchProfileToSwipe())
	return
	}
	
	await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao/choose-person',{ id, choice })

	dispatch(fetchProfileToSwipe())
}


const setMatches = (matches) => ({
	type: "SET_MATCHES",
	payload: {
		matches,
	}
})

export const getMatches = () => async (dispatch) => {

	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/joao/matches')
	
	dispatch(setMatches(response.data.matches))

}