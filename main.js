var express						= require('express');
var mysql						= require('mysql');
var proxyMysqlDeadlockRetries	= require('node-mysql-deadlock-retries');
var cors 						= require('cors');
var bodyParser					= require('body-parser');

var app				= express();
var corsOptions = {
	origin: function(origin, callback){
		callback(null, true);
	}
}
/*
var db_config = {
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'hris',
	multipleStatements: true
};
*/
var db_config = {
	host     : 'localhost',
	user     : 'solderi1_hris',
	password : 'x.m}If%O.)f!',
	database : 'solderi1_hris',
	multipleStatements: true
};
var retries				=5;      	// How many times will the query be retried when the ER_LOCK_DEADLOCK error occurs
var minMillis			= 60000;    	// The minimum amount of milliseconds that the system sleeps before retrying
var maxMillis			=90000;  	// The maximum amount of milliseconds that the system sleeps before retrying
var debug 				= 1;		 	// Show all the debugs on how the proxy is working
var show_all_errors 	= 1;// Show all errors that are outside of the proxy

var connection;
function handleDisconnect() {
	connection = mysql.createConnection(db_config);
	connection.connect(function(err) {
		if(err) {
			console.log('error when connecting to db:', err);
			setTimeout(handleDisconnect, 2000);
		}
	});
	connection.on('error', function(err) {
		console.log('db error', err);
		if(err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			console.log("here");
			throw err;
		}
	});
	connection.on('connection', function(connection_) {
		proxyMysqlDeadlockRetries(connection_, retries, minMillis, maxMillis, debug, show_all_errors);
	})
}
handleDisconnect();

/*LOG*/
app.use(function (req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	next();
});
var routes_			= require('./routes/index.js');

app.set('connection',connection);
app.all("*",cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes_);

app.get('/*', function(req, res) {
	res.send("WELCOME TO HRIS API");
});
app.post('/*', function(req, res) {
	res.send("WELCOME TO HRIS API");
});

app.listen(1234,function(){console.log("API SERVER START!")});
//app.listen(process.env.PORT,function(){console.log("API SERVER START!")});
