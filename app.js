const express = require('express');
const app = express();

app.set('views',__dirname + '/views');
app.set('view engine', 'hbs')

app.get('/', (req, res, next) => {
	let data = {
		name: 'JP',
		bootcamp: 'WebDev'
	}
	res.render('index', data)
});

app.get('/about', (req, res, next) => {
	let data = {
		name: 'JP',
		lastName: 'IA',
		bootcamp: 'WebDev',
		cities: ["Miami", "Madrid", "Barcelona", "Paris", "México", "Berlín"]
	}
	res.render('about', data)
})


app.listen(3000, () => console.log('Servidor listo'));


// const http = require('http');

// const url = require('url');
// const path = require('path');
// const fs = require('fs');

// const mimeTypes = {
// 	"html": "text/html",
// 	"jpeg": "image/jpeg",
// 	"jpg": "image/jpg",
// 	"png": "image/png",
// 	"js": "text/javascript",
// 	"css": "text/css"
// }

// http.createServer((req, res) => {
// 	let uri = url.parse(req.url).pathname;
// 	let fileName = path.join(process.cwd(), unescape(uri));
// 	console.log('cargando ' + uri);
// 	let stats;

// 	try {
// 		stats = fs.lstatSync(fileName);
// 	} catch(e) {
// 		res.writeHead(404, {"Content-Type": "text/plain"});
// 		res.write('Not found');
// 		res.end();
// 		return;
// 	}

// 	if (stats.isFile()) {
// 		let mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
// 		res.writeHead(200, {"Content-Type": mimeType});
// 		let fileStream = fs.createReadStream(fileName);
// 		fileStream.pipe(res);
// 	} else if(stats.isDirectory()) {
// 		res.writeHead(302, {
// 			'Location': 'index.html'
// 		});
// 		res.end();
// 	} else {
// 		res.writeHead(500, {'Content-Type': 'text/plain'});
// 		res.write('500 Internal Error\n');
// 		res.end();
// 	}

// }).listen(1337);
