import { getState, setState } from "./state.js";

const URL = "https://pokeapi.co/api/v2/pokemon"

export async function loadPokemon(){
    const limit = getState("limit")
    const page = getState("page")
    const offset = limit * page
    const query = `?limit=${limit}&offset=${offset}`
    document.getElementById("cargando").textContent = "Cargando..."

    try {
        const res = await fetch(URL + query)
        const data = await res.json()
        const pokemonList = data.results;

        const detailedPokemon = await Promise.all(
            pokemonList.map(async (p) => {
                const res = await fetch(p.url);
                return await res.json();
            })
        );
        setState("pokemon",detailedPokemon)
        setState("total",data.count)
    } catch {
        document.getElementById("cargando").textContent = "Error al cargar los Datos :("
    }
    document.getElementById("cargando").textContent = ""
}