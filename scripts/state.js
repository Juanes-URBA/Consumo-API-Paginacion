const state = {
    pokemon: [],
    page: 0,
    limit: 20,
    total: 0,
}

export function getState(key){
    return getState[key]
}

export function setState(key){
    state[key] = value
}
