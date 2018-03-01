import {DUMMY} from '../actions';

function reducer(state = [], action){
    switch (action.type){
        case DUMMY:
            return '';
        default:
            return state;
    }
}