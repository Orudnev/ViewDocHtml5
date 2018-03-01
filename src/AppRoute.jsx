import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Enum from './utils/Enum';
import Login from './pages/Login';
import SelectDD from './pages/SelectDD';
import Content from './components/Content';
import NotFound from './pages/NotFound';
import DFArea from './pages/DFArea';
import Error from './pages/Error';
import ut from './utils/Cutil.js';
import soapWrapper from './utils/SoapWrapper';

class App extends Component {
    constructor(){
        super();
        this.lastError = null;
        this.appSet = ut.pStorage.getAppSettings();
        this.state = {
        }
        this.setLastError = this.setLastError.bind(this);
        this.appMessage = this.appMessage.bind(this);
        this.readDFTree = this.readDFTree.bind(this);
    }

    appMessage(message){
        if (message === Enum.messages.LoginOk){
            this.readDFTree();
        }
    }

    readDFTree(){
       soapWrapper.df_GetAreaMembers(this.appSet.sessionId,'dsfs',this.onAreaMembers);
    }

    onAreaMembers(bresult,data){
        if (!bresult){
            //return;
        }
        console.log(data); 
    }

    setLastError(err){
        this.lastError = err;
    }

    render() {
        return (
            <div className="app">
                
                <Content>
                    <Route path="/books"  component={Login}  />

                    <Switch>
                        <Route exact path={Enum.routes.root} component={Login} />
                        <Route path={Enum.routes.pgLogin} render={props => <Login onLogin={this.login} />} />
                        <Route path={Enum.routes.pgSelectDD} render={props => <SelectDD pr={props} app={this} setLastErr={this.setLastError} />} />
                        <Route path={Enum.routes.pgDfArea} render={props => <DFArea pr={props} lastErr={this.lastError} />} />
                        <Route path={Enum.routes.pgError} render={props => <Error pr={props} lastErr={this.lastError} />} />
                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);