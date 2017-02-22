var app = require('./complex.js');
var prompt = require('prompt');
var colors = require('colors');


console.log("\n");
console.log(colors.bold.green("================================================================================"));
console.log("********************************************************************************");
console.log(colors.bold.green("================================================================================"));
console.log("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t COMPLEX NUMBERS\n".bold.blue);


function getMenuChoice() {
    //display menu below
    console.log(colors.bold.magenta("1. Add Complex Numbers\n"));
    console.log(colors.bold.magenta("2. Subtract Complex Numbers\n"));
    console.log(colors.bold.magenta("3. Multiply Complex Numbers\n"));
    console.log(colors.bold.magenta("4. Divide Complex Numbers\n"));
    console.log(colors.bold.magenta("5. Quit"));
    requestInput();
}

function requestInput () {
	console.log('\n>>> Please choose an option above')
	prompt.get(['option'], function (err, answer) {
  		evaluate(answer.option);
  	});
		
}

function getNumbers () {
	return new Promise( function (resolve, reject) {
		prompt.get(['num1_real', 'num1_imaginary','num2_real', 'num2_imaginary'], function (err, result) {

			var num1_r = Number(result.num1_real);
			var num1_i = Number(result.num1_imaginary);
			var num2_r = Number(result.num2_real);
			var num2_i = Number(result.num2_imaginary);

			if (isNaN(num1_r)) {
				reject(Error(colors.bold.red("\n\t" + result.num1_real + " is not a number.")));
			}

			if (isNaN(num1_i)) {
				reject(Error(colors.bold.red("\n\t" + result.num1_imaginary + " is not a number.")));
			}

			if (isNaN(num2_r)) {
				reject(Error(colors.bold.red("\n\t" + result.num2_real + " is not a number.")));
			}
 
			if (isNaN(num2_i)) {
				reject(Error(colors.bold.red("\n\t" + result.num2_imaginary + " is not a number.")));
			}
			
			var num1 = new app.Complex(num1_r, num1_i);
			var num2 = new app.Complex(num2_r, num2_i);

			resolve([num1, num2]);
  		});
	})	
}

getMenuChoice();


function evaluate(choice){
	while(choice != 5){

		if (choice == 1){
			console.log(colors.bold.yellow("\nADDITION\n"));
			console.log(colors.bold.cyan("\nPlease input real and imaginary coefficient without the i symbol.\n"));

			getNumbers().then(function (result) {
				console.log(colors.cyan("\n(" + result[0].toString() + ") + (" + result [1].toString() + ") = "));
				console.log(colors.bold.green("\n" + result[0].add(result[1]).toString()));
			}, function (err) {
				console.log(err);
			});

			break;
		}

		else if (choice == 2){
			console.log(colors.bold.yellow("\nSUBTRACTION\n"));
			console.log(colors.bold.cyan("\nPlease input real and imaginary coefficient without the i symbol.\n"));

			getNumbers().then(function (result) {
				console.log(colors.cyan("\n(" + result[0].toString() + ") - (" + result [1].toString() + ") = "));
				console.log(colors.bold.green("\n" + result[0].subtract(result[1]).toString()));
			}, function (err) {
				console.log(err);
			});

			break;
		}

		else if (choice == 3){
			console.log(colors.bold.yellow("\nMULTIPLICATION\n"));
			console.log(colors.bold.cyan("\nPlease input real and imaginary coefficient without the i symbol.\n"));

			getNumbers().then(function (result) {
				console.log(colors.cyan("\n(" + result[0].toString() + ") x (" + result [1].toString() + ") = "));
				console.log(colors.bold.green("\n" + result[0].multiply(result[1]).toString()));
			}, function (err) {
				console.log(err);
			});

			break;
		}

		else if (choice == 4){
			console.log(colors.bold.yellow("\nDIVISION\n"));
			console.log(colors.bold.cyan("\nPlease input real and imaginary coefficient without the i symbol.\n"));

			getNumbers().then(function (result) {
				console.log(colors.cyan("\n(" + result[0].toString() + ") / (" + result [1].toString() + ") = "));
				console.log(colors.bold.green("\n" + result[0].divide(result[1]).toString()));
			}, function (err) {
				console.log(err);
			});

			break;
		}

		else{
			console.log(colors.bold.red("\nINVALID OPTION!!! Please select an option from 1 - 5."));
			break;
		}

	}

	if (choice == 5){
		console.log(colors.bold.green("\nBYE!!!"));
	}

}
