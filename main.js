#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let input = await inquirer.prompt([
        {
            name: "todo",
            type: "text",
            message: "what do you want to add to your todo list",
        },
        {
            name: "add",
            type: "confirm",
            message: "are you sure you want to add to todo list",
            default: "false",
        }
    ]);
    todos.push(input.todo);
    condition = input.add;
    console.log(todos);
}
