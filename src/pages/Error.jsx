import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../common.css';
import './Error.css';
import locale from '../Locale.js';
import ut from '../utils/Cutil.js';

class Error extends React.Component {

    constructor(){
        super();
        this.historyObj = null;
        this.state = {
            showDetailButton: true,
            showDetailPanel: false
        }
        this.hanleBtnDetailClick = this.hanleBtnDetailClick.bind(this);
        this.hanleBtnCancelClick = this.hanleBtnCancelClick.bind(this);
    }

    hanleBtnDetailClick(event){
        this.setState({
            showDetailButton:false,
            showDetailPanel:true
        });
    }

    hanleBtnCancelClick(event){
        this.historyObj.goBack();
    }

    render() {
       if (this.props.lastErr){
        var errStrBrief = this.props.lastErr.error;
        var errStrFull = this.props.lastErr.strSoapResponse;
       } 
       this.historyObj = this.props.pr.history;
       var detailBtnClass = 
        errStrFull&&this.state.showDetailButton ? "btn btn-warning btn-xs " : "hidden";
       var detailPanelClass = 
        this.state.showDetailPanel ? "alert alert-danger" : "hidden"; 
       return (
       <div className="panel panel-danger">
            <div className="panel-heading">
                <div className="pageToolbar">
                    <h3 className="panel-title marginRA">
                        <span className="marginR1em glyphicon glyphicon-alert">
                        </span>
                        {locale.errorPage_Title}
                    </h3>
                    <button className="btn btn-danger btn-xs glyphicon glyphicon-remove"
                        onClick={this.hanleBtnCancelClick}>
                    </button>
                </div>
            </div>
            <div className="panel-body ">
                <div className="alert alert-danger" role="alert">{errStrBrief}</div>
                <button id="btnErrDetail" className={detailBtnClass}
                        onClick={this.hanleBtnDetailClick}>
                        {locale.clickForDetail}
                </button>
                <div className={detailPanelClass} role="alert">{errStrFull}</div>
            </div> 
        </div>   
        );
    }
}

export default Error;