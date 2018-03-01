import { connect } from 'react-redux';

import { setCredentials } from '../actions';
import Login from '../pages/Login_r';

function mapStateToProps(state) {
    console.log('container:',state);
    console.log('container:',state.appSettigns.user);
    return {
        user : state.appSettigns.user,
        password : state.appSettigns.password,
        rememberCredentials : state.appSettigns.rememberCredentials
    }
}

const LoginContainer = connect(mapStateToProps,null)(Login);

export default LoginContainer;