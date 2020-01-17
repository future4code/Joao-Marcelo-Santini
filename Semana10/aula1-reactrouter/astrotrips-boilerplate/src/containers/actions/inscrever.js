import Axios from "axios"

export const createTrip = (name, age, applicationText, profession, country) => async (dispath) => {
    const response = await Axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureX/joao/apply") {
        name: name,
        age: age,
        applicationText: applicationText,
        profession: profession,
        country: country
    }
}