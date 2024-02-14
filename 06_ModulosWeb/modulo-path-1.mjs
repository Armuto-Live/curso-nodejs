import {join} from 'path';

const DIRECTORIO="/ruta/principal";
const ARCHIVO = "archivo.txt";
const RUTA_COMPLETA=join(DIRECTORIO,ARCHIVO);

console.log("Ruta completa:",RUTA_COMPLETA);