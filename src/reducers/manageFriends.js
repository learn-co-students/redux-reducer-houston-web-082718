export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {...state, friends: [
                ...state.friends,
                action.friend
                ]
            }
        case "REMOVE_FRIEND":
            let friends = [...state.friends];
            const newFriends = friends.filter(friend => {
                return friend.id !== action.id;
            })
            return {...state, friends: newFriends}
        default:
            return state;
    }
}
