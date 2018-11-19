export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      state.friends.push(action.friend);
      return { ...state };
    case "REMOVE_FRIEND":
      let newArray = [...state.friends];
      console.log(newArray.find(friend => friend.id === action.id));

      newArray.splice(
        newArray.indexOf(newArray.find(friend => friend.id === action.id)),
        1
      );
      return { friends: newArray };
    default:
      return { friends: state.friends };
  }
}
