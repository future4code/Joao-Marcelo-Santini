import axios from "axios";
import {push, replace, goBack} from "connected-react-router";
import { routes } from "../Router"

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/futureX/joao/"

export const login = (email, password) => async (dispatch) => {
    const loginInformation = {
        email,
        password
    }

    try{
        const response = await axios.post(`${baseURL}login`, loginInformation);

        window.localStorage.setItem("token", response.data.token)
    }catch{
        window.alert("Login erro")
    }

    dispatch(push(routes.listAdm))

}