import { connect } from 'react-redux';

import { getMyDSNs } from '../actions';
import { navigate } from '../actions';
import SelectDD from '../pages/SelectDD_r';
import { setAppSettings } from '../actions';
import { login } from '../actions';

import en from '../utils/Enum';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch){
    return {
        isStoredDsnFound: (state) =>{
            let item = 
                state.dd.dsnList.value.find(item => item.Name === state.appSettings.Dsn);
            let rv =  (item != undefined);
            return rv;
        },
        onInit: (user)  => {
            dispatch(getMyDSNs(user));
        },
        onCancel: () =>{
            dispatch(navigate(en.routes.root));    
        },
        updateDsn:(newDsn) => {
            dispatch(setAppSettings({Dsn:newDsn}));
        },
        onSubmit: (formState) => {
            dispatch(login(formState.appSettings));
        }
    };
}


const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(SelectDD);

export default LoginContainer;