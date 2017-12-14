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

    getDataFromSoapResponse(strSoapResponse){
        var xmldoc=new DOMParser().parseFromString(strSoapResponse,"text/xml");    
        var returnNodes =  xmldoc.getElementsByTagName("return");
        var resultObj;
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
                scanNodes(returnNode,resultObj);
            }else{
                resultObj.push({});
                scanNodes(returnNode,resultObj[resultObj.length-1]);
            }
        }
        return resultObj;
    }

    doSoapRequest(handler,strXmlSoap){
        axios.defaults.headers.post['Content-Type'] = 'text/xml';
        axios.post('/DFStorageServer',strXmlSoap)
        .then(response => {
            window.myresponse = response.data; //to be remove
            var data = this.getDataFromSoapResponse(response.data);
            handler(true,data);
        })
        .catch(error=> {
            console.error(error);
            handler(false,error);    
        });
    }

    df_Login(userName,password,dataSource,handler){
        let strXmlSoap = this.getSoap('loginEx',{userName:userName,password:password,dataSource:dataSource});
        this.doSoapRequest(handler,strXmlSoap);
    }

    df_GetMyDSNs(userName,handler){
        console.log('df_GetMyDSNs');
        let strXmlSoap = this.getSoap('GetMyDSNs',{UserName:userName});
        this.doSoapRequest(handler,strXmlSoap);
    }

    
 //   " <userName>{0}</userName>n"+
 //   " <password>{1}</password>\n"+
 //   " <dataSource>{2}</dataSource>\n"+
}


let instance = new SoapWrapper();
export default instance;

