import {createServer} from 'http';

const SERVER= createServer((req,res)=>{
    //res.writeHead(200,{"Content-type":"text/plain"});
    res.writeHead(200,{"Content-type":"text/html; charset=utf-8"});
    res.end("<h1>¡Hola mundo!</h1>");

})

SERVER.listen(3000,"127.0.0.1",()=>{
    console.log("Servidor web en ejecución en http://127.0.0.1:3000");
});