import { readFileSync, writeFileSync } from "fs";
import { createInterface } from "readline";
import chalk from "chalk";

const tasks = [];
const DB_FILE = "tasks.txt";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(
    chalk.yellow.bold(" ****************** To Do App ***************** ")
  );
  console.log(
    chalk.blueBright.bold(" ************** Menú de opciones ************** ")
  );
  console.log("1. Agregar tarea");
  console.log("2. Listar tareas");
  console.log("3. completar tarea");
  console.log("4. salir");
  console.log(
    chalk.blueBright.bold(" ************** ---------------- ************** ")
  );
  chooseOption();
}

function loadTasks() {
  try {
    const data=readFileSync(DB_FILE,'utf-8');
    const lines= data.split("\n");
    tasks.length=0;

    lines.forEach(line =>{
      if(line.trim() !== ""){
        const [task,completed]= line.split("|");
        tasks.push({task, completed : completed===true});
      }
    });

    console.log(chalk.green.bold("Las tareas se han cargado desde la BD \n"));
  } catch (error) {
    console.log(chalk.green.bold("No hay tareas por hacer"));
  }
}

function saveTask() {
  const data= tasks.map(task => `${task.task}|${task.completed}`).join('\n');
  writeFileSync(DB_FILE,data,'utf-8');
  console.log(chalk.green.bold("Tarea agregada a la BD con éxito \n"));
}

function addTaks() {
  rl.question("Escribe la tarea:", (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Se agregó la tarea"));

    saveTask();
    displayMenu();
    chooseOption();
  });
}

function showTasks() {
  console.log(chalk.yellow.bold("************ TAREAS ************ \n"));
  if (tasks.length === 0) {
    console.log(chalk.bgGreen("No tienes tareas agregadas"));
  } else {
    tasks.forEach((task, index) => {
      let status = task.completed ? "/" : "x";

      if (task.completed) {
        console.log(
          chalk.greenBright(`${index + 1}. ${status} - ${task.task}`)
        );
      } else {
        console.log(chalk.red(`${index + 1}. ${status} - ${task.task}`));
      }
    });
  }
  displayMenu();
  chooseOption();
}

function completeTask() {
  rl.question(
    chalk.bgMagentaBright("Ingresa el número de la tarea a completar"),
    (taskNumber) => {
      const index = parseInt(taskNumber) - 1;
      if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        saveTask();
        console.log(chalk.green.bold("Tarea marca con éxito \n"));
      } else {
        console.log(chalk.red.bold("No existe el numero de la tarea \n"));
      }

      displayMenu();
      chooseOption();
    }
  );
}

function chooseOption() {
  rl.question("Elige una opción (1-4):", (choice) => {
    switch (choice) {
      case "1":
        addTaks();
        break;
      case "2":
        showTasks();
        break;
      case "3":
        completeTask();
        break;
      case "4":
        console.log(chalk.yellow("Chao"));
        rl.close();
        break;
      default:
        console.log(chalk.red("Incorrecto,intentalo otra vez"));
        chooseOption();
        break;
    }
  });
}

loadTasks();
displayMenu();
