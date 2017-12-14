import React from 'react'
import soapWrapper from '../utils/SoapWrapper';

function NotFound() {
    soapWrapper.df_GetMyDSNs('sysdba',(bresult,data)=>console.log(data));
    return (
        <main id="not-found">
            <i className="material-icons">error_outline</i>
            <h2>Не найдено</h2>
        </main>
    );
}

export default NotFound;