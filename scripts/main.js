import { loadPokemon } from "./service.js";
import { render } from "./ui.js";

async function startApp() {
    await loadPokemon()
    render()
}

startApp()