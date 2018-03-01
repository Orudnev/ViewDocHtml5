var Enum = {
    lstor: {
        AppSettings: 'AppSettings'
    },
    routes : {
        root: '/',
        pgLogin:'/login',
        pgSelectDD:'/selectDD',
        pgError:'/error',
        pgDfArea:'/dfArea/:rootArea',
        pgDFroot:'' 
    },
    appSet : {
        user : 'user',
        password :'password',
        rememberCredentials : 'rememberCredentials',
        Dsn:'Dsn',
        sessionId:'sessionId'
    },
    messages:{
        LoginOk:'LoginOk'
    }
}

export default Enum;