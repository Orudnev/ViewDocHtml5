import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './pages/Login';

import Content from './components/Content';
import NotFound from './pages/NotFound';

class App extends Component {
    render() {
        return (
            <div className="app">
                
                <Content>
                    <Route path="/books"  component={Login}  />

                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/login" render={props => <Login onLogin={this.login} />} />
                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);