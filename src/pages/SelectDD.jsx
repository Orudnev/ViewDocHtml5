import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';
import Enum from '../utils/Enum';
import '../common.css';
import './SelectDD.css';
import locale from '../Locale.js';
import ut from '../utils/Cutil.js';
import soapWrapper from '../utils/SoapWrapper';

class SelectDD extends React.Component {

    constructor(){
        super();
        this.historyObj = null;
        this.appSet = ut.pStorage.getAppSettings();
        this.state = {
            dsnList:[],
            selectedDsn:'',
            waitResonse:false
        }
        this.rowGetter = this.rowGetter.bind(this);
        this.onDsnListRetrived = this.onDsnListRetrived.bind(this);
        this.onDsnSelected = this.onDsnSelected.bind(this);
        this.handleBtnOkClick = this.handleBtnOkClick.bind(this);
        this.hanleBtnCancelClick = this.hanleBtnCancelClick.bind(this);
        this.onLoginResponse = this.onLoginResponse.bind(this);
        this.onError = this.onError.bind(this);
        
        soapWrapper.df_GetMyDSNs(ut.pStorage.getAppSettings()[Enum.appSet.user],this.onDsnListRetrived);
    }

    onDsnListRetrived(bresult,data){
        if (!bresult){
            this.onError(data);
            return;
        }
        for(let i=0;i<data.length;i++){
            if (data[i].Name==this.appSet.Dsn){
                data[i].isSelected = true;
                this.setState({selectedDsn:data[i].Name})   
                break;
            }
        }
        this.setState({dsnList:data});
    }

    onError(data){
        console.log(this.props);
        this.props.setLastErr(data);
        this.historyObj.push(Enum.routes.pgError);  
    }

    onDsnSelected(rowCol){
        let rowIndex = rowCol.rowIdx;
        for (let i=0;i<this.state.dsnList.length;i++){
            this.state.dsnList[i].isSelected = (i==rowIndex);
        }
        this.setState({selectedDsn:this.state.dsnList[rowIndex].Name}); 
    }

    handleBtnOkClick(){
        this.setState({waitResonse:true});
        this.appSet.Dsn = this.state.selectedDsn;
        ut.pStorage.setAppSettings(this.appSet);
        soapWrapper.df_Login(this.appSet.user,this.appSet.password,this.appSet.Dsn,this.onLoginResponse)
    }

    onLoginResponse(bresult,data){
         if (!bresult){
            this.onError(data);
            return;
        } 
        this.appSet.sessionId=data.sessionId;
        ut.pStorage.setAppSettings(this.appSet);
        this.props.app.appMessage(Enum.messages.LoginOk);
        //this.historyObj.push(Enum.routes.pgDfArea); 
    }

    hanleBtnCancelClick(event){
        this.historyObj.goBack();
    }
    
    
    rowGetter(rowIndex){
        let result = {Name:""}; //default value
        if(this.state.dsnList[rowIndex]){
            result = this.state.dsnList[rowIndex];
        }
        return result;
    }
    
    render() {
        this.historyObj = this.props.pr.history;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="pageToolbar">
                    <h3 className="panel-title marginRA">
                        <span className="marginR1em glyphicon glyphicon-th-list">
                        </span>
                        {locale.SelectDsn_Title}
                    </h3>
                    <div className="">
                        <button className="btn btn-success btn-xs glyphicon glyphicon-ok marginR5px"
                                disabled={!this.state.selectedDsn||this.state.waitResonse}
                                onClick={this.handleBtnOkClick}>
                        </button>
                    </div>
                    <div className="">
                        <button className="btn btn-danger btn-xs glyphicon glyphicon-remove"
                                onClick={this.hanleBtnCancelClick}>
                        </button>
                    </div>
                    </div>
                </div>
                <div className="panel-body ">
                    <form onSubmit={this.onSubmit} className="pageBody-Container">
                        <ReactDataGrid 
                            columns={[{key:'Name',name:'DSN'}]}
                            rowGetter={this.rowGetter}
                            rowsCount={this.state.dsnList.length}
                            minHeight={300} 
                            rowSelection={
                                {
                                    showCheckbox:false,
                                    selectBy: {
                                        isSelectedKey:'isSelected'
                                    }
                                }
                            }
                            onCellSelected={this.onDsnSelected}
                            />

                    </form>
                </div>    
            </div>    
        );
    }
}

export default SelectDD;