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
  console.log(colors.bold.magenta("5. Quit\n"));
  console.log(colors.bold.magenta("6. Equality of Complex Numbers"));
  requestInput();
}

//requests user option from the menu
function requestInput () {
	var option = readlineSync.question('\n>>> Please select an option above: ');
	evaluate(option);
}

function getNumbers () {
	console.log(colors.bold.yellow("\nPlease input real and imaginary coefficient WITHOUT the 'i' symbol."));
	var result = readlineSync.question("\n>>> Type numbers separated by a comma: ");
	
	//remove every space at the beginning and end of the string
	result = result.replace(/(^\s*)|(\s*$)/gi, "");

	//replace every white space in between with single space
	result = result.replace(/\s+/g, '');

	//get an array of entries in result
	result = result.split(",");					       


	if (result.length % 2 != 0) {
		return (colors.bold.red("\nYour input should be in pairs of REAL, IMAGINARY for each number and should be separated by a comma.\n"));
	}

	var params = [];

	//iterate over the array
	for (entry of result) {							   
		
		//cast each entry to a number which is a string from the console input
		var num = Number(entry);					   

		//if entry not a number, it gets cast to NaN
		if (isNaN (num)) {								
			return (colors.bold.red("\nError:", entry, "may not be a number or may be against the specified input format\n"));
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
	//only option 5 can exit the loop
	switch(choice) {
		case '1':
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
		
		case '2':
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

		case '3':
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

		case '4':
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

		case'5':
			console.log(colors.bold.blue("\nBye bye! TIA!!!  TIA!!!  TIA!!!  TIA!!! TIA!!! TIA!!! TIA!!!\n"));
			console.log(colors.rainbow("`(`  (o.O)"));
			console.log(colors.rainbow(" o   ( ^ )"));

			console.log("\t\t", colors.bold(colors.america("THANK YOU!")), colors.bold(colors.zebra("THANK YOU!!")),
				colors.bold(colors.rainbow("THANK YOU!!!")));
			
			//option 5 for quit exits the 'loop' and function
			return;

		case '6':
			console.log(colors.bold.yellow("\nEQUALITY"));			
			var numbers = getNumbers();

			if (numbers.constructor !== Array) {
				console.log(numbers);
				break;
			}

			answer = new app.Complex(0, 0);

			if (numbers.length === 1) {
					answer = "Nothing to compare";
				}

			for (var comp = 0; comp < (numbers.length - 1); comp ++) {

				if (comp == 0){
					answer = answer.add(numbers[comp]);
				}

				if (numbers.length === 2) {
					answer = answer.equals(numbers[comp + 1]);
					break;
				}

				else{
					answer = answer.equals(numbers[comp + 1]);
					if (answer === false) {
						break;
					}
					
					if(comp != numbers.length - 2) {
						answer = (numbers[comp + 1]);
					}
				}
			}

			console.log("\n");

			var combinedString = "";

			for (var comp = 0; comp < numbers.length; comp++) {
				if(comp != numbers.length - 1) {
					combinedString += '(' + numbers[comp].toString() + ')' + ' === ';
				}
				else {
					combinedString += '(' + numbers[comp].toString() + ')' + ' = ';
				}
			}

			console.log(colors.bold.cyan(combinedString));
			console.log("\n");
			console.log(colors.bold.green(answer));
			console.log("\n");
			break;

		default:
			console.log(colors.bold.red("\nINVALID OPTION!!! Please select an option from 1 - 5."));
			console.log("\n");

	}

													
	console.log(colors.bold.yellow("Press 5 to quit or select another option to compute\n"));
	setTimeout(getMenuChoice, 1000);

}
