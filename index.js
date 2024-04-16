import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "toDos",
            type: "input",
            message: "What would you like to add to your TO-DOs?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Would you like to add more?",
            default: "false",
        },
    ]);
    todos.push(addTask.toDos),
        condition = addTask.addMore;
    console.log(todos);
}
