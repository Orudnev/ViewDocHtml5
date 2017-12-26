import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../common.css';
import './Checkbox.css';

class CheckBox extends Component {

render() {
    return(
<div className="pull-right">
    <div className="material-switch ">
        <span className="labelDlg chbLabelPadding">blablablbalyyyy</span>
        <input id="someSwitchOptionDefault" name="someSwitchOption001" type="checkbox"/>
        <label htmlFor="someSwitchOptionDefault" className="label-primary"></label>
    </div>    
</div>    
    );
}

}
export default CheckBox;
