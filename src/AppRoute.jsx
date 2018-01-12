import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './pages/Login';
import SelectDD from './pages/SelectDD';
import Content from './components/Content';
import NotFound from './pages/NotFound';
import Error from './pages/Error';

class App extends Component {
    constructor(){
        super();
        this.lastError = null;
        this.state = {
        }
        this.setLastError = this.setLastError.bind(this);

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
                        <Route exact path="/" component={Login} />
                        <Route path="/login" render={props => <Login onLogin={this.login} />} />
                        <Route path="/selectDD" render={props => <SelectDD pr={props} setLastErr={this.setLastError} />} />
                        <Route path="/error" render={props => <Error pr={props} lastErr={this.lastError} />} />
                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);