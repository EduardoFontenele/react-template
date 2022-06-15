import { combineReducers } from 'redux';

import exampleReducer from './example/reducer';
import loginReducer from './logged/reducer';

export default combineReducers({
  exampleReducer,
  loginReducer,
});
