export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            const stateIds = state.friends.map(st => {
                return st.id
            })
            
            const idx = stateIds.indexOf(action.id)

            return { friends: [...state.friends.slice(0, idx), ...state.friends.slice(idx + 1)] }
        default:
            return state
    }
}
