/*var async = require('async');
var express = require('express');


function testRun(){
	async.series([
		function (){
			console.log('do stuff regardless of response');
			setTimeout(5000){
				console.log('did stuff');
			};
		},
		function () {
			console.log ('return web response here');
		}
	], function complete(){
		//maybe dont do it like this.
		return true;
	});

}

testRun();*/


/* general express server.*/

//const app = express();
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! TEST <a href="google.ca" target="_blank></a>'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))