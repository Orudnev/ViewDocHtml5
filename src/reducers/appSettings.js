import ut from '../utils/Cutil';
import {LST_SET_APPSETTINGS} from '../actions';

function reducer(state = {}, action){
    switch (action.type){
        case LST_SET_APPSETTINGS:
            let appSettings = ut.pStorage.getAppSettings();
            if (action.payload) {
                Object.assign(appSettings,action.payload);
                ut.pStorage.setAppSettings(appSettings);
            }
            let rv = Object.assign({},state,appSettings);
            return rv;
        default:
            return state;
    }
}

export default reducer;