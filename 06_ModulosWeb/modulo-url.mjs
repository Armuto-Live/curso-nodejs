import {parse} from 'url';

const urlString="https://www.youtube.com/watch?v=tDF644vI-gs&t=2624s";

const parseUrl= parse(urlString,true);

console.log("Protocolo:",parseUrl.protocol);
console.log("Hostname:",parseUrl.hostname);
console.log("Pathname:",parseUrl.pathname);

console.log("Parámetros de consulta:",parseUrl.query);