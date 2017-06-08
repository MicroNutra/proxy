const express = require('express');
const cors = require('cors');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
	{
		extended: false
	}
));

app.get('/', (req, res) => {
	console.log(req.body);
	if(req.query.url){
		request(req.query.url, (error, response, body) => {
			res.json(JSON.parse(body));
		});
	}else{
		res.send('Add "?url=" followed by the proxied URL after the address');
	}
});

app.post('/', (req, res) => {
	console.log(req.body);
	res.send(req.method);
});

app.listen(port, () => {
	console.log(`Proxy listening on port ${port}`);
});
