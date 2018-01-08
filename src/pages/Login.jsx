import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../common.css';
import './Login.css';
import locale from '../Locale.js';
import Checkbox from '../components/CheckBox.jsx';
import ut from '../utils/Cutil.js';

class Login extends Component {

    constructor(){
        super();
        this.appSet = ut.pStorage.getAppSettings();
        this.state = {
            user:this.appSet.user,
            password:this.appSet.password,
            rememberCredentials:true,
            btnSubmitDisabled:!this.appSet.user || !this.appSet.password
        }
        this.handleChangeRCred = this.handleChangeRCred.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.setCtrlState = this.setCtrlState.bind(this);
        console.log(ut.pStorage);
    }

    /*
    onSubmit = event => {
        event.preventDefault();

        this.props.onLogin({
            username: this.usernameInput.value,
            password: this.passwordInput.value
        });
    };
    */
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

    
    render() {
        return (
            <main id="login">
                <form onSubmit={this.onSubmit} className="loginForm-container">
                    <div id="loginForm" className="panel panel-primary ">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <span id="dwcLabel" className="glyphicon glyphicon-flash">
                                </span>
                                {locale.loginPage_ConnectToServer}
                            </h3>
                        </div>  
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
                                <Checkbox caption={locale.loginPage_RememberCredentials} 
                                checked={this.state.rememberCredentials}
                                onChange={this.handleChangeRCred}
                                 />
                            </div>    
                            <div className="form-group ">
                                <button type="submit" className="btn btn-primary btn-xs pull-right " disabled={this.state.btnSubmitDisabled} >
                                    {locale.loginPage_ConnectToServer}
                                </button>
                            </div>
                        </div>    
                    </div>
                </form>
            </main>
        );
    }
}

export default Login;