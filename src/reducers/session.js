import {DFDD_LOGIN_REQUEST} from '../actions';
import {DFDD_LOGIN_RESPONSE} from '../actions';
import {SESSION_SET_DATA} from '../actions';
import {DFDD_DDTREE_REQUESTED} from '../actions';
import {DFDD_DDTREE_LOADED} from '../actions';
import en from '../utils/Enum';



function reducer(state , action){
    if(!state) 
        state = {                    
                    loginInfo:{stage:en.stage.none},
                    sessionId:'',
                    DfDdTree:{stage:en.stage.none}
                };
    switch (action.type){
        case DFDD_LOGIN_REQUEST:
            let newData = {loginInfo:{stage:en.stage.loading}};
            let rv = Object.assign({},state,newData);
            return rv;
        case DFDD_LOGIN_RESPONSE:
            newData = {
                    loginInfo:{stage:en.stage.loaded,value:action.payload},
                    sessionId:action.payload.sessionId
                };  
            rv = Object.assign({},state,newData);
            return rv;
        case SESSION_SET_DATA:
            throw "SESSION_SET_DATA not implemented";
        case DFDD_DDTREE_REQUESTED:
            newData = {DfDdTree:{stage:en.stage.loading}};
            rv = Object.assign({},state,newData);
            return rv;
        case DFDD_DDTREE_LOADED:
            newData = {DfDdTree:{stage:en.stage.loaded,value:action.payload}};                   
            rv = Object.assign({},state,newData);
            return rv;
        default:
            return state;
    }
}

export default reducer;