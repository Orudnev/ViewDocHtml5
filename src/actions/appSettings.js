import { LOCATION_CHANGE } from 'react-router-redux';


export const LST_SET_CREDENTIALS = 'LST_SET_CREDENTIALS';

export function setCredentials(credentials) {
    return {
        type: LST_SET_CREDENTIALS,
        payload: credentials
    }
}

export function navigate(url){
    return {
        type:LOCATION_CHANGE,
        payload:{
                pathname:'/ddd',
                search:'',
                hash:'',
                action:'PUSH',
                key:null,
                query: {}
        }
    }
}