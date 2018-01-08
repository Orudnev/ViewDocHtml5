class UT{
    constructor(){
    }
    pStorage = new PStorage();
}

class PStorage{
    constructor(){
        this.Storages = {
            AppSettings:{
                name:'AppSettings',
                defaultData:{
                    user : '',
                    password :'',
                    rememberCredentials : false
                }    
            }
        }        
    }
    getAppSettings(){
        let appSet = this.getData(this.Storages.AppSettings.name);
        if (!appSet.rememberCredentials){
            appSet.user = '',
            appSet.password = ''
        }
        return appSet;
    }
    setAppSettings(dataObj){
        this.setData(this.Storages.AppSettings.name,dataObj);
    }
    getData(storageName){
        if (!this.Storages.hasOwnProperty(storageName)){
            throw 'PStorageError: wrong storage name "'+storageName+'"';
        }
        let storedStrValue = localStorage.getItem(storageName);
        let storedObjValue = {};
        if (storedStrValue){
            try{
               storedObjValue =  JSON.parse(storedStrValue);     
            }
            catch(e){
            }
        }
        return Object.assign({},this.Storages[storageName].defaultData,storedObjValue);
    }
    setData(storageName,dataObj){
        localStorage.setItem(storageName,JSON.stringify(dataObj));
    }
}

export default new UT();
