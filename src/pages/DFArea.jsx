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
import dirTest from '../image/diricons/test.svg';

class DFArea extends React.Component {

    constructor(){
        super();
        this.historyObj = null;
        this.appSet = ut.pStorage.getAppSettings();
        this.state = {
        }
        this.rowGetter = this.rowGetter.bind(this);
        this.handleBtnOkClick = this.handleBtnOkClick.bind(this);
        this.hanleBtnCancelClick = this.hanleBtnCancelClick.bind(this);
        //soapWrapper.df_GetMyDSNs(ut.pStorage.getAppSettings()[Enum.appSet.user],this.onDsnListRetrived);
    }

    onError(data){
        console.log(this.props);
        this.props.setLastErr(data);
        this.historyObj.push(Enum.routes.pgError);  
    }


    handleBtnOkClick(){
        this.setState({waitResonse:true});
        this.appSet.Dsn = this.state.selectedDsn;
        ut.pStorage.setAppSettings(this.appSet);
        soapWrapper.df_Login(this.appSet.user,this.appSet.password,this.appSet.Dsn,this.onLoginResponse)
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
                        TODO: path control
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
                    <img src={dirTest} />
                </div>    
            </div>    
        );
    }
}

export default DFArea;