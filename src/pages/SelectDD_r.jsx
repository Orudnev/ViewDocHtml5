import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import 'bootstrap/dist/css/bootstrap.css';
import '../common.css';
import './SelectDD.css';
import locale from '../Locale.js';
import en from '../utils/Enum';

class SelectDD extends React.Component {

    constructor(props){
        super(props);
        this.props.onInit(this.props.appSettings.user);

        this.rowGetter = this.rowGetter.bind(this);
        this.onDsnSelected = this.onDsnSelected.bind(this);
        this.hanleBtnCancelClick = this.hanleBtnCancelClick.bind(this);
    }
 
    getGridElement(){
        let rv = <div>Loading...</div>; 
        if (this.props.dd.dsnList && this.props.dd.dsnList.stage == en.stage.loaded){
            rv =  <ReactDataGrid 
                    columns={[{key:'Name',name:'DSN'}]}
                    rowGetter={this.rowGetter}
                    rowsCount={this.props.dd.dsnList.value.length}
                    minHeight={300} 
                    rowSelection={
                        {
                            showCheckbox:false,
                            selectBy: {
                                isSelectedKey:'isSelected'
                            }
                        }
                    }
                    onCellSelected={this.onDsnSelected}
                    />;
        }                   
        return rv;
    }

    rowGetter(rowIndex){
        let result = {Name:""}; //default value
        if(this.props.dd.dsnList.value[rowIndex]){
            result = this.props.dd.dsnList.value[rowIndex];
            result.isSelected = result.Name === this.props.appSettings.Dsn;
        }
        return result;
    }

    handleBtnOkClick(){
    }

    hanleBtnCancelClick(event){
        this.props.onCancel();
    }
    
    onDsnSelected(rowCol){
        let rowIndex = rowCol.rowIdx;
        let newDsn = this.props.dd.dsnList.value[rowIndex].Name;
        this.props.updateDsn(newDsn);
    }
    
    
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="pageToolbar">
                    <h3 className="panel-title marginRA">
                        <span className="marginR1em glyphicon glyphicon-th-list">
                        </span>
                        {locale.SelectDsn_Title}
                    </h3>
                    <div className="">
                        <button className="btn btn-success btn-xs glyphicon glyphicon-ok marginR5px"
                                disabled={!this.props.isStoredDsnFound(this.props)}
                                onClick={this.handleBtnOkClick}>
                        </button>
                    </div>
                    <div className="">
                        <button className="btn btn-danger btn-xs glyphicon glyphicon-remove"
                                onClick={this.hanleBtnCancelClick}>
                        </button>
                    </div>
                    </div>
                </div>
                <div className="panel-body ">
                    <form onSubmit={this.onSubmit} className="pageBody-Container">
                        {this.getGridElement()}
                    </form>
                </div>    
            </div>    
        );
    }
}

export default SelectDD;