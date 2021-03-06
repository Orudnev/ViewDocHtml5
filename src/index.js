import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';
import LoginContainer from './containers/LoginContainer';
import SelectDDContainer from './containers/SelectDDContainer';
import DfItemGalleryContainer from './containers/DfItemGalleryContainer';
import NotFound from './pages/NotFound';
import {setAppSettings, test} from './actions'

const history = syncHistoryWithStore(hashHistory, store);
store.dispatch(setAppSettings());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/SelectDD" component={SelectDDContainer} />
        <Route path="/DF" component={DfItemGalleryContainer} />
        <Route strict path="/DF/*" component={DfItemGalleryContainer} />
    </Router>
  </Provider>,
  document.getElementById('root'));



/*
    <div >test</div>
    <Router >
      <Route path="/" component={Login}/>
      <Route component={NotFound} />
    </Router>






import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './AppRoute';
import './index.css';
window.dispatchEvent(new Event("hideProgressBar"));
ReactDOM.render(
    <Router>
        <App  />
    </Router>
, document.getElementById('root'));
*/