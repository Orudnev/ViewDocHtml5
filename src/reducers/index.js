import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import appSettings from './appSettings';
import dd from './dd';
import session from './session'

const reducer = combineReducers({
    routing: routerReducer,
    dd,
    appSettings,
    session
});

export default reducer;