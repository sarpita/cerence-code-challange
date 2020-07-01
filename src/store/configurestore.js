import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/reducers';
import {initialState} from '../reducers/reducers';

export default  function configureStore() {  
    const store = createStore(userReducer, initialState, applyMiddleware(thunk));
    return store;
}