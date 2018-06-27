import { connect } from 'react-redux';

import { setAppSettings } from '../actions';
import { navigate } from '../actions';
import Login from '../pages/Login_r';

function mapStateToProps(state) {
    console.log('container:',state);
    console.log('container:',state.appSettings.user);
    return state.appSettings;
}

function mapDispatchToProps(dispatch){
    return {
        onSubmit: (formState) => {
            dispatch(setAppSettings(formState));
            dispatch(navigate('/SelectDD'));
        }
    };
}

const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginContainer;