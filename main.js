#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let question = await inquirer.prompt([
        {
            name: "action",
            type: "list",
            choices: ["Add to list", "Delete from list", "See the list", "Exit"],
            message: "What do you want to do?",
        }
    ]);
    if (question.action == "Add to list") {
        let condition1 = true;
        while (condition1) {
            let input = await inquirer.prompt([
                {
                    name: "todo",
                    type: "input",
                    message: "what do you want to add to your todo list",
                }
            ]);
            if (input.todo == "") {
                console.log("invalid input");
            }
            let input2 = await inquirer.prompt([
                {
                    name: "addMore",
                    type: "confirm",
                    message: "do you want to add more ?",
                    default: "true",
                }
            ]);
            todos.push(input.todo);
            condition1 = input.addMore;
        }
    }
    if (question.action == "Delete from list") {
        let condition2 = true;
        while (condition2) {
            let input = await inquirer.prompt([
                {
                    name: "delete",
                    type: "input",
                    message: "what do you want to delete from your todo list. Enter index",
                },
                {
                    name: "deletemore",
                    type: "confirm",
                    message: "do you want to delete more from your todo list. Enter index",
                    default: "true",
                },
            ]);
            todos.splice(input.delete);
            condition2 = input.deletemore;
        }
    }
    if (question.action == "See the list") {
        console.log(todos);
    }
    if (question.action == "Exit") {
        condition = false;
    }
}
