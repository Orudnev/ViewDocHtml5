import axios from 'axios';
import soapWrapper from '../utils/SoapWrapper';

export const DFDD_REQUEST_DSNLIST = 'DFDD_REQUEST_DSNLIST';
export const DFDD_GET_DSNLIST = 'DFDD_GET_DSNLIST';
export const DFDD_DDTREE_REQUESTED = 'DFDD_DDTREE_REQUESTED';
export const DFDD_DDTREE_LOADED = 'DFDD_DDTREE_LOADED';
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

export function loadDDTree(store) {
    var DfDdTree = {id:'',areas:[],volumes:[]};
    var counter = 0;
    var findAreaById = function(areas,areaId){
        if (!areaId){
            //root
            return DfDdTree;
        }
        for(var i=0; i<areas.length; i++){
            var area = areas[i];
            if (area.id===areaId)
                return area;
            var result = findAreaById(area.areas,areaId);
            if (result) return result;    
        }
        return null;
    };

    var onLoadCompleted = null;

    var onReceived = function (bresult,data){
        var st = store;
        if (!bresult){
            console.log('error:',data);
            return;
        }

        var currentAreaObj = findAreaById(DfDdTree.areas,data.id); 
        for(var i=0;i<data.areas.length;i++)
        {
            var area = data.areas[i];
            currentAreaObj.areas.push({
                id:area.Id,
                itemType: 'area',
                parent:currentAreaObj,
                name:area.Name,
                areas:[],
                volumes:[]
            });
            soapWrapper.df_GetAreaMembers(store.session.sessionId,area.Id,onReceived);
            counter++;               
        }
        
        for(var i=0;i<data.volumes.length;i++)
        {
            var volume = data.volumes[i];
            currentAreaObj.volumes.push({
                    id:volume.Id,
                    itemType:'volume',
                    parent:currentAreaObj,
                    name:volume.Name,
                    icon:volume.Icon
                });
        }
        counter--;
        if (counter==0){
            onLoadCompleted();
        }
    }


    return dispatch => {
        dispatch({
            type: DFDD_DDTREE_REQUESTED 
        });
        onLoadCompleted = function(){
            dispatch({
                type: DFDD_DDTREE_LOADED,
                payload: DfDdTree 
            });
        }
        soapWrapper.df_GetAreaMembers(store.session.sessionId,'',onReceived);
    }
}

