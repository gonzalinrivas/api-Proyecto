const mysql = require('mysql');

const mysqlConnection = mysql.createConnection( {
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'bea3844e6b92d9',
    password: '4b598fff',
    database: 'heroku_72690f851b108eb'
});


mysqlConnection.connect( function ( err ){
    if( err ){
        console.log(  err );
        return;
    }else{
        console.log( 'La base de datos esta conectada');
    }
});

module.exports = mysqlConnection;