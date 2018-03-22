import axios from 'axios';

class SoapWrapper {

    constructor(){
        this.templates = {
            base:
                '<SOAP-ENV:Envelope '+
                        'xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" '+
                        'xmlns:xsd="http://www.w3.org/2001/XMLSchema" '+
                        'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">'+
                    '<SOAP-ENV:Body>'+
                        '<tns:{0} xmlns:tns="http://Df5.comped.it/">'+
                            '{1}'+
                        '</tns:{0}>'+
                '</SOAP-ENV:Body>'+
                '</SOAP-ENV:Envelope>',
            parameter:
                '<{0}>{1}</{0}>'
        }

    }
    
    stringFormat(formatStr,args)
    {
        return formatStr.replace(/{(\d+)}/g, function(match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
        });
    }

    getSoap(webMethodName,parameters){
        var parameterNodes = '';
        for (var parName in parameters){
            let paramNode = this.stringFormat(this.templates.parameter,[parName,parameters[parName]]);
            parameterNodes += paramNode;
        }
        var rv = this.stringFormat(this.templates.base,[webMethodName,parameterNodes]);
        return rv;
    }


    getDataFromSoapResponse(strSoapResponse,specialParseHandler){
        var xmldoc=new DOMParser().parseFromString(strSoapResponse,"text/xml");    
        var returnNodes =  xmldoc.getElementsByTagName("return");
        var faultStringNodes = xmldoc.getElementsByTagName("faultstring");
        var resultObj;
        if (faultStringNodes.length>0){
            let errorStr = faultStringNodes[0].textContent;
            resultObj = {error:errorStr,strSoapResponse:strSoapResponse};
            return resultObj;
        }
        
        var simpleParse = (node,outObject) => outObject[node.tagName] = node.textContent;
        var scanNodes = function(node,currObj){
            for (var child of node.children){
                if (child.children.length>1)
                {
                    currObj[child.tagName] = {};
                    scanNodes(child,currObj[child.tagName]);
                }
                else
                    simpleParse(child,currObj);                    
            }
        }

        if (returnNodes.length==1)
               resultObj = {};
        else
               resultObj = [];

        for (var i=0; i<returnNodes.length; i++)
        {
            var returnNode = returnNodes[i];
            if (returnNodes.length==1)
            {
                if(specialParseHandler)
                    specialParseHandler(returnNode,resultObj);                 
                else
                    scanNodes(returnNode,resultObj);
            }else{
                resultObj.push({});
                if(specialParseHandler)
                    specialParseHandler(returnNode,resultObj[resultObj.length-1]);    
                else
                    scanNodes(returnNode,resultObj[resultObj.length-1]);
            }
        }
        return resultObj;
    }

    doSoapRequest(handler,strXmlSoap,specialResponseHandler){
        axios.defaults.headers.post['Content-Type'] = 'text/xml';
        axios.post('/DFStorageServer',strXmlSoap)
        .then(response => {
            var data = this.getDataFromSoapResponse(response.data,specialResponseHandler);
            var isOK = !data.hasOwnProperty('error');
            handler(isOK,data);
        })
        .catch(error=> {
            console.error('SoapWrapperError:')
            console.error(error);
            handler(false,error);    
        });
    }

    df_Login(userName,password,dataSource,handler){
        let strXmlSoap = this.getSoap('loginEx',{userName:userName,password:password,dataSource:dataSource});
        this.doSoapRequest(handler,strXmlSoap);
    }

    df_GetMyDSNs(userName,handler){
        let strXmlSoap = this.getSoap('GetMyDSNs',{UserName:userName});
        this.doSoapRequest(handler,strXmlSoap);
    }

    df_GetAreaMembers(sessionID,rootAreaId,handler){
        let strXmlSoap = this.getSoap('Directory_GetSnapshot',{SessionId:sessionID,Parent:rootAreaId});
        this.doSoapRequest(handler,strXmlSoap,function(node,outObject){
            outObject.areas = [];
            outObject.volumes = [];
            var xmldoc=new DOMParser().parseFromString(node.textContent,"text/xml");
            var areaNodes =  xmldoc.getElementsByTagName("Area");
            var volumeNodes =  xmldoc.getElementsByTagName("Dir");
            for (var i=0; i<areaNodes.length; i++){
                var node = areaNodes[i];
                var newItem = {Name: node.getAttribute('Name'),Id: node.getAttribute('ID')};
                outObject.areas.push(newItem);
            }
            for (var i=0; i<volumeNodes.length; i++){
                var node = volumeNodes[i];
                var newItem = {
                    Name: node.getAttribute('Name'),
                    Id: node.getAttribute('ID'),
                    Icon: node.getAttribute('Icon')
                };
                outObject.volumes.push(newItem);
            }
        });
    }

    
 //   " <userName>{0}</userName>n"+
 //   " <password>{1}</password>\n"+
 //   " <dataSource>{2}</dataSource>\n"+
}


let instance = new SoapWrapper();
export default instance;

