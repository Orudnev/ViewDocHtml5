import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Login from './pages/Login';
import SelectDD from './pages/SelectDD';
import Content from './components/Content';
import NotFound from './pages/NotFound';

class App extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <div className="app">
                
                <Content>
                    <Route path="/books"  component={Login}  />

                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/login" render={props => <Login onLogin={this.login} />} />
                        <Route path="/selectDD" render={props => <SelectDD onLogin={this.login} />} />
                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);