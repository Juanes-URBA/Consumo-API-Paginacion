const state = {
    pokemon: [],
    page: 0,
    limit: 20,
    total: 0,
}

export function getState(key){
    return state[key]
}

export function setState(key, value){
    state[key] = value
}
