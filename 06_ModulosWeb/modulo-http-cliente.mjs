import { get } from "https";

const URL_SITE={
    hostname:"jonmircha.co  m",
    port:443,
    path:"/cursos",
}

get(URL_SITE,(res)=>{
    console.log(`El sitio ${URL_SITE.hostname} ha respondido. codigo: ${res.statusCode}. Mensaje: ${res.statusMessage}`);
}).on("error",(error)=>{
    console.error(`El sitio ${URL_SITE.hostname} no ha respondido. codigo: ${error.code}. Mensaje: ${error.message}`);
});