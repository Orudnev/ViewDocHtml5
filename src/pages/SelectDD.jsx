import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../common.css';
import './SelectDD.css';
import locale from '../Locale.js';
import ut from '../utils/Cutil.js';

class SelectDD extends React.Component {

    constructor(){
        super();
        this.appSet = ut.pStorage.getAppSettings();
        this.state = {
            user:this.appSet.user,
            password:this.appSet.password,
            rememberCredentials:this.appSet.rememberCredentials,
            btnSubmitDisabled:!this.appSet.user || !this.appSet.password
        }
        this.handleChangeRCred = this.handleChangeRCred.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.setCtrlState = this.setCtrlState.bind(this);
        console.log(ut.pStorage);
    }

    handleChangeRCred(event){
        this.setState({
            rememberCredentials:event.target.checked
        });
    }

    handleChangeText(event){
        let dataField = event.target.getAttribute('datafield');
        let jsonStr = `{"${dataField}":"${event.target.value}"}`;
        let newValue = JSON.parse(jsonStr);
        this.setState(newValue,this.setCtrlState);
    }
    setCtrlState(){
        this.setState({btnSubmitDisabled: !this.state.user || !this.state.password});
    }

    handleClick = event => {
        event.preventDefault();
        this.appSet.rememberCredentials = this.state.rememberCredentials;
        this.appSet.user = this.state.user;
        this.appSet.password = this.state.password;
        ut.pStorage.setAppSettings(this.appSet);
        this.props.history.push('/blablabla/vvv');
    }


    
    render() {
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
                        <button className="btn btn-success btn-xs glyphicon glyphicon-ok marginR5px">
                        </button>
                    </div>
                    <div className="">
                        <button className="btn btn-danger btn-xs glyphicon glyphicon-remove">
                        </button>
                    </div>
                    </div>
                </div>
                <div className="panel-body ">
                    <form onSubmit={this.onSubmit} className="pageBody-Container">
                        <div id="loginForm" className="panel panel-primary ">
                            <div className="panel-body">
                                <div className="form-group">
                                    <label className="labelDlg" >{locale.loginPage_UserName}</label>
                                    <input className="pull-right"
                                        type="text"
                                        datafield="user"
                                        onChange={this.handleChangeText}
                                        value={this.state.user} />
                                </div>    
                                <div className="form-group ">
                                    <div >
                                    <label className="labelDlg" >{locale.loginPage_Password}</label>
                                        <input className="pull-right"
                                            type="password"
                                            datafield="password"
                                            onChange={this.handleChangeText}
                                            value={this.state.password} />
                                    </div>
                                </div>
                                <div className="form-group ">
                                    <button type="submit" className="btn btn-primary btn-xs pull-right " 
                                            disabled={this.state.btnSubmitDisabled}
                                            onClick={this.handleClick} 
                                            >
                                            {locale.loginPage_ConnectToServer}
                                    </button>
                                </div>
                            </div>    
                        </div>
                    </form>
                </div>    
            </div>    
        );
    }
}

export default SelectDD;