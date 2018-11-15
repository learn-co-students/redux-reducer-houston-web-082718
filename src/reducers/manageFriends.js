export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return state = { ...state, friends: [...state.friends, action.friend] }
            break
        case 'REMOVE_FRIEND':
            let index = state.friends.findIndex(f=> f.id === action.id)
            return state = {...state, friends: [
                ...state.friends.slice(0, index),
                ...state.friends.slice(index + 1)
            ]}
            break
        default:
            return state
    }
}
