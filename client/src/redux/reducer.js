const initialState = {
  users: [],
  userDetail: {},
  loggedUser: {},
  loading: false,
  error: false,
}

// redux ini one way data binding
const reducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  
  switch (type) {
    case "FETCH_USERS":
      return { ...state, users: [...payload] };
    case "FETCH_USER_BY_ID":
      return { ...state, userDetail: { ...payload } };
    case "FETCH_LOGGED_USER":
      return { ...state, loggedUser: { ...payload } };
    case "SET_LOADING":
      return { ...state, loading: payload };
    case "SET_ERROR":
      return { ...state, error: payload };
    default:
      return state;
  }
}

export default reducer;