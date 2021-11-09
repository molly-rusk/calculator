const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input)
{
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	
	console.log('mathSymbol', mathSymbol);
	console.log('num1', num1);
	console.log('num2', num2);

	if(mathSymbol === "+"){   //Addition
		console.log(num1 +num2);
		}

	else if(mathSymbol === '-'){ //Subtraction
		console.log(num1-num2);
		}

	else if(mathSymbol === '*'){ //Multiplication
		console.log(num1 * num2);
		}

	else if(mathSymbol === '/'){ //Division
		console.log(num1 / num2);
		}
	
	else if(mathSymbol === '!'){ //Square root
		let x = Math.sqrt(num1);
		console.log(x);
	}
	
	else if(mathSymbol === '@'){ // num1 to the power of num2
		let x = Math.pow(num1, num2);
		console.log(x);
	}
	

	// This line closes the connection to the command line interface.
	
	reader.close()



});

