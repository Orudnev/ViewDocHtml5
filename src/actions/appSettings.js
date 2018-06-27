import { LOCATION_CHANGE } from 'react-router-redux';

import soapWrapper from '../utils/SoapWrapper';

export const LST_SET_APPSETTINGS = 'LST_SET_APPSETTINGS';
export const SESSION_SET_DATA = 'SESSION_SET_DATA';
export const DFDD_LOGIN_REQUEST = 'DFDD_LOGIN_REQUEST';
export const DFDD_LOGIN_RESPONSE = 'DFDD_LOGIN_RESPONSE';


export function setAppSettings(credentials) {
    return {
        type: LST_SET_APPSETTINGS,
        payload: credentials
    }
}

export function setSessionData(data) {
    return {
        type: SESSION_SET_DATA,
        payload: data
    }
}


export function login(appSet) {
    return dispatch => {
        dispatch({
            type: DFDD_LOGIN_REQUEST 
        });
        var s=appSet;
        soapWrapper.df_Login(appSet.user, appSet.password,appSet.Dsn,
            function(bresult,data)
            {
                if (!bresult){
                    //return;
                }
                dispatch({
                    type: DFDD_LOGIN_RESPONSE,
                    payload: data
                });
                dispatch(navigate('/DF/AllVolumes/aaa/bbb/ccc/?param2=blabla&param2=jjjj'));

                
            }
        );

      
    }
}



export function navigate(url){
    return {
        type:LOCATION_CHANGE,
        payload:{
                pathname:url,
                search:'',
                hash:'',
                action:'PUSH',
                key:null,
                query: {}
        }
    }
}