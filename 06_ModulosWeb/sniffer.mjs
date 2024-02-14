import { createServer } from "http";
import { get } from "https";


const HOTSNAME = "localhost";
const PORT = 3000;
const OPTIONS = {
  host: "jonmircha.com",
  port: 443,
  path:"/cursos",
};

let htmlCode = "";

const httpClient = (res) => {
  console.log(
    `El sitio ${OPTIONS.host} ha respondido. ${res.statusCode}. Mensaje: ${res.statusMessage}`
  );

  res.on("data", (data) => {
    htmlCode += data;
    console.log(data,data.toString());
  });
};

const httpError = (error) => {
  console.log(
    `El sitio ${OPTIONS.host} no ha respondido. ${error.code}. Mensaje: ${error.message}`
  );
};

const webServer=(req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type","text/html; charset=utf-8");
    res.end(htmlCode);
}

// Instancia cliente HTTP
get(OPTIONS,httpClient).on('error',httpError);

// Instancia servidor
createServer(webServer).listen(PORT,HOTSNAME,()=>{
    console.log(`Servidor corriendo en http://${HOTSNAME}:${PORT}`);
})