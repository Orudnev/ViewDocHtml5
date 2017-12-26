import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../common.css';
import './Login.css';
import locale from '../Locale.js';
import Checkbox from '../components/CheckBox.jsx';

class Login extends Component {

    

    /*
    onSubmit = event => {
        event.preventDefault();

        this.props.onLogin({
            username: this.usernameInput.value,
            password: this.passwordInput.value
        });
    };
    */
    
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
                                    name="username"
                                    ref={input => this.usernameInput = input} />
                            </div>    
                            <div className="form-group ">
                                <div >
                                <label className="labelDlg" >{locale.loginPage_Password}</label>
                                    <input className="pull-right"
                                        type="password"
                                        name="password"
                                        ref={input => this.passwordInput = input} />
                                </div>
                            </div>
                            <div className="form-group ">
                                <Checkbox />
                            </div>    
                            <div className="form-group ">
                                <button type="submit" className="btn btn-primary btn-xs pull-right " disabled={true} >
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