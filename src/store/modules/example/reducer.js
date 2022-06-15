const initialState = {
  botaoClicado: false,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case 'BUTTON_CLICKED':
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    default:
      return state;
  }
}
