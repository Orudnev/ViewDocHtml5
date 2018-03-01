import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(promise,thunk)));

export default store;