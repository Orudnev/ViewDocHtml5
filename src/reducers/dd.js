import {DFDD_REQUEST_DSNLIST,DFDD_GET_DSNLIST,DUMMY} from '../actions';

function reducer(state = {}, action){
    switch (action.type){
        case DFDD_GET_DSNLIST:
            return action.payload;
        case DUMMY:
            return action.payload;            
        default:
            return state;
    }
}

export default reducer;