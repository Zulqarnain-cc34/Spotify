export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  items: null,
  token: null,
  discover_weekly: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case actionTypes.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
