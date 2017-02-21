var app = require('./complex.js');
var prompt = require('prompt');

console.log("\n");
console.log("================================================================================");
console.log("********************************************************************************");
console.log("================================================================================");
console.log("\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t COMPLEX NUMBERS\n");


function getMenuChoice() {
    //display menu below
    console.log("1. Add Complex Numbers");
    console.log("2. Subtract Complex Numbers");
    console.log("3. Multiply Complex Numbers");
    console.log("4. Divide Complex Numbers");
    console.log("5. Quit");
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
			var num1 = new app.Complex(Number(result.num1_real), Number(result.num1_imaginary));
			var num2 = new app.Complex(Number(result.num2_real), Number(result.num2_imaginary));
			
			resolve([num1, num2]);
  		});
	})	
}

getMenuChoice();


function evaluate(choice){
	while(choice != 5){

		if (choice == 1){
			getNumbers().then(function (result) {
				console.log(result[0].add(result[1]));
			});
			break;
		}

		else if (choice == 2){
			getNumbers().then(function (result) {
				console.log(result[0].subtract(result[1]));
			});
			break;
		}

		else if (choice == 3){
			getNumbers().then(function (result) {
				console.log(result[0].multiply(result[1]));
			});
			break;
		}

		else if (choice == 4){
			getNumbers().then(function (result) {
				console.log(result[0].divide(result[1]));
			});
			break;
		}

		else{
			console.log("\nInvalid Option");
			break;
		}

	}

	if (choice == 5){
		console.log("\nBYE!!!");
	}

}
