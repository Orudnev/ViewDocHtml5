import axios from 'axios';
import soapWrapper from '../utils/SoapWrapper';

export const DFDD_REQUEST_DSNLIST = 'DFDD_REQUEST_DSNLIST';
export const DFDD_GET_DSNLIST = 'DFDD_GET_DSNLIST';
export const DUMMY = 'DUMMY';

export function getMyDSNs(userName){
    return dispatch => {
        dispatch({
            type: DFDD_REQUEST_DSNLIST 
        });
        let strXmlSoap = soapWrapper.getSoap('GetMyDSNs',{UserName:userName});
        axios.defaults.headers.post['Content-Type'] = 'text/xml';
        return axios.post('/DFStorageServer',strXmlSoap)
            .then(response => {
                let respObj = soapWrapper.getDataFromSoapResponse(response.data,null);
                dispatch({
                    type: DFDD_GET_DSNLIST,
                    payload: respObj
                })
            })
            .catch(error=> {
                console.error('SoapWrapperError:')
                console.error(error);
            });
    }
}

export function test(data) {
    return {
        type: DUMMY,
        payload: data
    }
}

