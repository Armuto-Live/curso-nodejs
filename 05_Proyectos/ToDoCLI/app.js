import { createInterface } from "readline";
import chalk from "chalk";

const tasks = [];
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

function addTaks() {
  rl.question("Escribe la tarea:", (task) => {
    tasks.push({ task, completed: false });
    console.log(chalk.green.bold("Se agregó la tarea"));
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

displayMenu();
