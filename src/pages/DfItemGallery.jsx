import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../common.css';
import locale from '../Locale.js';
import en from '../utils/Enum';

class DfItemGallery extends React.Component {

    constructor(props){
        super(props);
        this.props.onInit(props);

        //this.hanleBtnCancelClick = this.hanleBtnCancelClick.bind(this);
    }
 
   
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="pageToolbar">
                    <h3 className="panel-title marginRA">
                        <span className="marginR1em glyphicon glyphicon-th-list">
                        </span>
                        {'DFItemGallery'}
                    </h3>
                    <div className="">
                        <button className="btn btn-success btn-xs glyphicon glyphicon-ok marginR5px"
                                >
                        </button>
                    </div>
                    <div className="">
                        <button className="btn btn-danger btn-xs glyphicon glyphicon-remove"
                                >
                        </button>
                    </div>
                    </div>
                </div>
                <div className="panel-body ">
                    <form onSubmit={this.onSubmit} className="pageBody-Container">
                    </form>
                </div>    
            </div>    
        );
    }
}

export default DfItemGallery;