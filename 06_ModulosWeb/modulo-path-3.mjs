import { Console } from 'console';
import {basename,dirname,extname} from 'path';

const RUTA="/ruta/principal/archivo.txt";
const NOMBRE_ARCHIVO=basename(RUTA);
const NOMBRE_DIRECTORIO=dirname(RUTA);
const EXTENSION=extname(RUTA);

console.log("Nombre del archivo:",NOMBRE_ARCHIVO);
console.log("Nombre del directorio:",NOMBRE_DIRECTORIO);
console.log("extension del archivo:",EXTENSION);
