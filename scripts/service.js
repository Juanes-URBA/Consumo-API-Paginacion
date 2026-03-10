import { getState, setState } from "./state.js";

const URL = "https://pokeapi.co/api/v2/pokemon"

async function loadPokemon(){
    const limit = getState("limit")
    const page = getState("page")
    const offset = limit * page
    const query = `?limit=${limit}&offset=${offset}`
    document.getElementById("cargando").textContent = "Cargando..."

    try {
        
    } catch {
        
    }

}