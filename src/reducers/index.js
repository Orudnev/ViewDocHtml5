import { combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import dd from './dd';
import appSettings from './appSettings';

const reducer = combineReducers({
    routing: routerReducer,
    dd,
    appSettings
});

export default reducer;