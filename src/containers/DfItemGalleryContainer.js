import { connect } from 'react-redux';

import { loadDDTree } from '../actions';
import { navigate } from '../actions';
import DfItemGallery from '../pages/DfItemGallery';

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch){
    return {
        onInit: (state)  => {
            dispatch(loadDDTree(state));
        },        
        onSubmit: (formState) => {
            dispatch(navigate('/SomeUrl'));
        }
    };
}

const DfmItemGalleryContainer = connect(mapStateToProps,mapDispatchToProps)(DfItemGallery);

export default DfmItemGalleryContainer;