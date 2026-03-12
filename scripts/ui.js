import { getState, setState } from "./state.js";
import { loadPokemon } from "./service.js";

async function changePage(newPage){
    setState("page", newPage)
    await  loadPokemon()
    render()
}

function getPokemonCart(p){
    const type = p.types[0].type.name
    return `
    <div class="pokemon-card">
    <img src="${p.sprites.front_default}">
    <h2>#${p.id} ${p.name}</h2>
    <p class="type">${type}</p>
    </div>`
}
function renderPagination(){
    const pagination = document.getElementById("pagination")
    pagination.innerHTML = ""

    const page = getState("page")
    const total = getState("total")
    const limit = getState("limit")

    const totalPages = Math.ceil(total/limit)

    for (let i = 0; i < totalPages; i++) {
        const btn = document.createElement("button")
        btn.textContent = i + 1

        if (i === page) {
            btn.classList.add("active")
        }

        btn.addEventListener("click",()=>{
            changePage(i)
        })
        pagination.appendChild(btn)
    }
}

export function render (){
    const container = document.getElementById("container")
    container.innerHTML = ""
    const pokemon = getState("pokemon")

    pokemon.forEach(p=>{
        container.innerHTML += getPokemonCart(p)
    })

    renderPagination()
}
