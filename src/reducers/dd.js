import {DFDD_REQUEST_DSNLIST,DFDD_GET_DSNLIST,DUMMY} from '../actions';
import en from '../utils/Enum';


function reducer(state , action){
    if(!state) 
        state = {
                    dsnList:{stage:en.stage.none, value:[]}
                };
    switch (action.type){
        case DFDD_REQUEST_DSNLIST:
            return {dsnList:{stage:en.stage.loading, value:[]}};
        case DFDD_GET_DSNLIST:
            console.log(en);
            return {dsnList:{stage:en.stage.loaded, value:action.payload}};
        case DUMMY:
            return action.payload;            
        default:
            return state;
    }
}

export default reducer;