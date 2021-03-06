import { createStore as _createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { formReducer } from './reducer';

export function createStore(mockedState = undefined) {
  return _createStore(formReducer, mockedState, applyMiddleware(thunk));
}
