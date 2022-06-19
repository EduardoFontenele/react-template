import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.BUTTON_CLICKED_SUCCESS:
      console.log('Sucesso');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;

    case types.BUTTON_CLICKED_FAILURE:
      console.log('Error');
      return state;

    case types.BUTTON_CLICKED_REQUEST:
      console.log('Fazendo requisição na API');
      return state;

    default:
      return state;
  }
}
