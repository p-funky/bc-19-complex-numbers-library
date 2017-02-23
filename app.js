var app = require('./complex.js');
var colors = require('colors');
var readlineSync = require('readline-sync');

console.log("\n");
console.log(colors.bold.green("================================================================================"));
console.log("********************************************************************************");
console.log(colors.bold.green("================================================================================"));
console.log("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t COMPLEX NUMBERS\n".bold.blue);

getMenuChoice();

//Call up the menu
function getMenuChoice() {
    //display menu below
    console.log(colors.bold.magenta("1. Add Complex Numbers\n"));
    console.log(colors.bold.magenta("2. Subtract Complex Numbers\n"));
    console.log(colors.bold.magenta("3. Multiply Complex Numbers\n"));
    console.log(colors.bold.magenta("4. Divide Complex Numbers\n"));
    console.log(colors.bold.magenta("5. Quit"));
    requestInput();
}

//requests user option from the menu
function requestInput () {
	var option = readlineSync.question('\n>>> Please select an option above: ');
	evaluate(option);
}

function getNumbers () {
		console.log(colors.bold.yellow("\nPlease input real and imaginary coefficient without the 'i' symbol."));
		var result = readlineSync.question("\n>>> Type numbers separated by a comma: ");
		result = result.replace(/(^\s*)|(\s*$)/gi, "");		//remove every space at the beginning and end of the string
		result = result.replace(/\s+/g, '');				//replace every white space in between with single space
		result = result.split(",");					       //get an array of entries in result


		if (result.length % 2 != 0) {
			return (colors.bold.red("\nYour input should be in pairs of (real, imaginary) for each number and should be separated by a comma.\n"));
		}

		var params = [];

		for (entry of result) {							   //iterate over the array
			var num = Number(entry);					   //cast each entry to a number which is a string from the console input

			if (isNaN (num)) {								//if entry not a number, it gets cast to NaN
				return (colors.bold.red("\nError:", entry, "is not a number\n"));
			}

			else{
				params.push(num);
			}
		}
		
		result = [];

		for (var number = 0; number < params.length; number += 2) {
			result.push(new app.Complex(params[number], params[number + 1]));
		}
			
  		return result;	
}

//evaluate user option
function evaluate(choice){
	while(choice != 5){			//only option 5 can exit the loop

		if (choice == 1){
			console.log(colors.bold.yellow("\nADDITION"));			
			var numbers = getNumbers();

			if (numbers.constructor !== Array) {
				console.log(numbers);
				break;
			}

			answer = new app.Complex(0, 0);

			for (var comp = 0; comp < numbers.length; comp++) {
				answer = answer.add(numbers[comp]);
			}

			console.log("\n");

			var combinedString = "";
			for (var comp = 0; comp < numbers.length; comp++) {
				if(comp != numbers.length - 1) {
					combinedString += '(' + numbers[comp].toString() + ')' + ' + ';
				}
				else {
					combinedString += '(' + numbers[comp].toString() + ')' + ' = ';
				}
			}

			console.log(colors.bold.cyan(combinedString));
			console.log("\n");
			console.log(colors.bold.green(answer.toString()));
			console.log("\n");
			console.log(answer);
			console.log("\n");
			break;
		}

		else if (choice == 2){
			console.log(colors.bold.yellow("\nSUBTRACTION"));			
			var numbers = getNumbers();

			if (numbers.constructor !== Array) {
				console.log(numbers);
				break;
			}

			answer = new app.Complex(0, 0);

			for (var comp = 0; comp < numbers.length; comp++) {
				if (comp == 0){
					answer = answer.add(numbers[comp]);
				}
				else{
					answer = answer.subtract(numbers[comp]);
				}
			}

			console.log("\n");

			var combinedString = "";

			for (var comp = 0; comp < numbers.length; comp++) {
				if(comp != numbers.length - 1) {
					combinedString += '(' + numbers[comp].toString() + ')' + ' - ';
				}
				else {
					combinedString += '(' + numbers[comp].toString() + ')' + ' = ';
				}
			}

			console.log(colors.bold.cyan(combinedString));
			console.log("\n");
			console.log(colors.bold.green(answer.toString()));
			console.log("\n");
			console.log(answer);
			console.log("\n");
			break;
		}

		else if (choice == 3){
			console.log(colors.bold.yellow("\nMULTIPLICATION"));			
			var numbers = getNumbers();

			if (numbers.constructor !== Array) {
				console.log(numbers);
				break;
			}

			answer = new app.Complex(0, 0);

			for (var comp = 0; comp < numbers.length; comp++) {
				if (comp == 0){
					answer = answer.add(numbers[comp]);
				}
				else{
					answer = answer.multiply(numbers[comp]);
				}
			}

			console.log("\n");

			var combinedString = "";

			for (var comp = 0; comp < numbers.length; comp++) {
				if(comp != numbers.length - 1) {
					combinedString += '(' + numbers[comp].toString() + ')' + ' x ';
				}
				else {
					combinedString += '(' + numbers[comp].toString() + ')' + ' = ';
				}
			}

			console.log(colors.bold.cyan(combinedString));
			console.log("\n");
			console.log(colors.bold.green(answer.toString()));
			console.log("\n");
			console.log(answer);
			console.log("\n");
			break;
		}

		else if (choice == 4){
			console.log(colors.bold.yellow("\nDIVISION"));			
			var numbers = getNumbers();

			if (numbers.constructor !== Array) {
				console.log(numbers);
				break;
			}

			answer = new app.Complex(0, 0);

			for (var comp = 0; comp < numbers.length; comp++) {
				if (comp == 0){
					answer = answer.add(numbers[comp]);
				}
				else{
					answer = answer.divide(numbers[comp]);
				}
			}

			console.log("\n");

			var combinedString = "";

			for (var comp = 0; comp < numbers.length; comp++) {
				if(comp != numbers.length - 1) {
					combinedString += '(' + numbers[comp].toString() + ')' + ' / ';
				}
				else {
					combinedString += '(' + numbers[comp].toString() + ')' + ' = ';
				}
			}

			console.log(colors.bold.cyan(combinedString));
			console.log("\n");
			console.log(colors.bold.green(answer.toString()));
			console.log("\n");
			console.log(answer);
			console.log("\n");
			break;
		}

		else{
			console.log(colors.bold.red("\nINVALID OPTION!!! Please select an option from 1 - 5."));
			console.log("\n");
			break;
		}

	}

	if (choice == 5){												//option 5 for quit exits the loop and function
		console.log(colors.bold.blue("\nBye bye! TIA!!!  TIA!!!  TIA!!!  TIA!!! TIA!!! TIA!!! TIA!!!\n"));
		console.log(colors.rainbow("`(`  (o.O)"));
		console.log(colors.rainbow(" o   ( ^ )"));

		console.log("\t\t", colors.bold(colors.america("THANK YOU!")), colors.bold(colors.zebra("THANK YOU!!")), colors.bold(colors.rainbow("THANK YOU!!!")));
		return;
	}

	else{									//reprint the options and re-enter the loop
		console.log(colors.bold.yellow("Press 5 to quit or select another option to compute\n"));
		setTimeout(getMenuChoice, 1000);
	}

}
