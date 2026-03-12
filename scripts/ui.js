import { getState, setState } from "./state.js";
import { loadPokemon } from "./service.js";

async function changePage(newPage){
    setState("page",newPage)
    await  loadPokemon()
}

function getPokemonCart(p){
    const type = p.type[0].type.name
    return `
    <div class="pokemon-card">
    <img src="${p.sprites.front_default}">
    <h2>#${p.id} ${p.name}</h2>
    <p class="type">${type}</p>
    </div>`
}