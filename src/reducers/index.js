import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import dd from './dd';
import appSettigns from './appSettings';

const reducer = combineReducers({
    routing: routerReducer,
    dd,
    appSettigns
});

export default reducer;