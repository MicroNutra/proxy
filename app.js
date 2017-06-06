const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
	if(req.query.url){
		request(req.query.url, (error, response, body) => {
			res.json(JSON.parse(body));
		});
	}else{
		res.send('Add "?url=" followed by the proxied URL after the address');
	}
});

app.listen(port, () => {
	console.log(`Proxy listening on port ${port}`);
});
