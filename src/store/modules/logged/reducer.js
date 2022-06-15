const initialState = {
  logged: false,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case 'IS_LOGGED':
      const newState = { ...state };
      newState.logged = !newState.logged;
      return newState;

    default:
      return state;
  }
}
