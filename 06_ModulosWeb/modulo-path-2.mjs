import {resolve} from 'path';

const RUTA_RELATIVA="../carpeta/archivo.txt";
const RUTA_ABSOLUTA=resolve(RUTA_RELATIVA);

console.log("Ruta absoluta:",RUTA_ABSOLUTA);