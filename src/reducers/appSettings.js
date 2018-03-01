import {LST_SET_CREDENTIALS} from '../actions';
import ut from '../utils/Cutil';

function reducer(state = {}, action){
    switch (action.type){
        case LST_SET_CREDENTIALS:
            let appSettings = ut.pStorage.getAppSettings();
            if (action.payload) {
                Object.assign(appSettings,action.payload);
                ut.pStorage.setAppSettings(appSettings);
            }
            console.log(state);   
            let rv = Object.assign({},state,appSettings);
            console.log(rv);
            return rv;
        default:
            return state;
    }
}

export default reducer;