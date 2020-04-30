import userReducer from './userReducer';
import changePetsDesire from './changePetsDesires.reducer';

import {combineReducers} from 'redux';

export default combineReducers({
  user: userReducer,
  petsDesires: changePetsDesire,
});
