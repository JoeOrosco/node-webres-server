// import { fsync } from 'fs';
import fs from 'fs';
import http2 from 'http2';

const server = http2.createSecureServer({
  key: fs.readFileSync('./keys/server.key', 'utf-8'),
  cert: fs.readFileSync('./keys/server.crt', 'utf-8')
}, (req, res) => {

  console.log(req.url)

  // res.writeHead(200, { 'Content-Type': 'text/html' });
  // res.write('<h1>Hello World</h1>');
  // res.end()

  // const data = { name: 'John', age: 30, ciudad: 'New York' };

  // res.writeHead(200, { 'Conten-Type': 'application/json' });
  // res.end(JSON.stringify(data));

  if (req.url === '/') {
    const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlFile)
    return;
  }

  if (req.url?.includes('.js')) {
    res.writeHead(200, { 'Content-Type': 'apllication/javascript' });
  } else if (req.url?.includes('.css')) {
    res.writeHead(200, { 'Content-Type': 'text/css' });
  }

  try {
    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
    res.end(responseContent)

  } catch (error) {
    res.writeHead(404, { 'Content Type': 'text/html' });
    res.end();
  }


});

server.listen(8080, () => {
  console.log("Server running on port 8080");
})

// Seccion 13- Diferentes tareas => Curso de NodeJS 