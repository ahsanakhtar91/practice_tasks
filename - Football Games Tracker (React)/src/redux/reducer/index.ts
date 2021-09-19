import { combineReducers } from 'redux';
import gamesReducer from './reducer';

const rootReducer = combineReducers({
  gamesReducer,
});

export default rootReducer;
