import { combineReducers, createStore } from 'redux';
import noteReducer from '../reducers/noteReducer';

const rootReducers = combineReducers({
  note: noteReducer,
});

export const store = createStore(rootReducers);
