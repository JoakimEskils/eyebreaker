// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "eyebreaker" is now active!');


	vscode.window.showInformationMessage("20 minute eyebreaker timer started");
	let counter = 20 * 60;
	counter = 5
	startTimer(counter);


	vscode.commands.registerCommand("eyebreaker.restart",
		function () {
			vscode.window.showInformationMessage("20 minute eyebreaker timer restarted");
			startTimer(counter)
		})
}

function startTimer(counter: number) {
	let intervalId = setInterval(() => {
		counter = counter - 1;
		console.log(counter)
		if (counter === 0) {
			vscode.window.showWarningMessage("EYEBREAK!");
			vscode.window.showInformationMessage("Restart timer by f1 -> 'Eyebreaker'")
			clearInterval(intervalId)
		}
	}, 1000);
}

// this method is called when your extension is deactivated
export function deactivate() { }
