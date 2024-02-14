import {createServer} from 'http';

const SERVER= createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"Content-type":"text/html; charset=utf-8"});
        res.end("<h1>¡Hola mundo!</h1>");
    } else if(req.url === "/hola"){
        res.writeHead(200,{"Content-type":"text/html; charset=utf-8"});
        res.end("<h1>¡Hola!</h1>");
    }else{
        res.writeHead(404,{"Content-type":"text/html; charset=utf-8"});
        res.end("<h1>Not found</h1>");
    }

    //res.writeHead(200,{"Content-type":"text/plain"});

})

SERVER.listen(3000,"127.0.0.1",()=>{
    console.log("Servidor web en ejecución en http://127.0.0.1:3000");
});