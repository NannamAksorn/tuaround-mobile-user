import { combineReducers } from 'redux';
import userReducer from './userReducer';
import mapReducer from './mapReducer';

export default combineReducers({
  user: userReducer,
  map: mapReducer
});
