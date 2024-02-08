import {createInterface} from 'readline';
import chalk from 'chalk';

const tasks=[];
const rl= createInterface({
    input: process.stdin,
    output:process.stdout
});

function displayMenu(){
    console.log(chalk.yellow.bold(" ************** To Do App ************** "));
    console.log("1. Agregar tarea");
    console.log("2. Listar tareas");
    console.log("3. completar tarea");
    console.log("4. salir");
}

displayMenu();