import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../common.css';
import './Checkbox.css';

class CheckBox extends Component {

render() {
    return(
<div className="pull-right">
    <div className="material-switch ">
        <span className="labelDlg chbLabelPadding">{this.props.caption}</span>
        <input 
            id="someSwitchOptionDefault"  type="checkbox" 
            defaultChecked={this.props.checked}
            onChange={this.props.onChange}
            />
        <label htmlFor="someSwitchOptionDefault" className="label-primary"></label>
    </div>    
</div>    
    );
}

}
export default CheckBox;
