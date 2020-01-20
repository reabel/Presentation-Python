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
const express = require('express');
const app = express();
const port = 4567;


function processRespFirst(res){
	res.status(204);
	res.send('Worked');
}

function postRespProcess(req){
	console.log('waiting 10 seconds pretending like we\'re doing stuff');
	//body not showing up for some reason
	setTimeout(function(){ console.log('Request:', req.body);
	 }, 10000);
}

function processRespSecond(req, res){
	console.log('waiting 5 seconds pretending like we\'re doing stuff');
	//body not showing up for some reason
	setTimeout(function(){ 
		console.log('Request:', req.body);
		res.status(200);
		res.json({someProp: 'test'});

	 }, 5000);
}
app.use(express.json());

app.post('/payload', (req, res) => {
	/*webhook style*/
	processRespFirst(res);
	postRespProcess(req);
});

app.post('/payload-api', (req, res) => {
	/*api style*/
	processRespSecond(req, res); 
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
