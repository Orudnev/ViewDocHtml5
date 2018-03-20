import { connect } from 'react-redux';

import { setCredentials } from '../actions';
import { navigate } from '../actions';
//import { LOCATION_CHANGE } from 'react-router-redux';
import Login from '../pages/Login_r';

function mapStateToProps(state) {
    console.log('container:',state);
    console.log('container:',state.appSettigns.user);
    return state.appSettigns;
}

function mapDispatchToProps(dispatch){
    return {
        onSubmit: (formState) => {
            //dispatch(setCredentials(formState));
            dispatch(navigate('/ddd'));
        }
    };
}

const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginContainer;