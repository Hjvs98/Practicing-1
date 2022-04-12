const { Console } = require('console');
const readline = require('readline');
const { CLIENT_RENEG_LIMIT } = require('tls');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Hi, how are you today?", function(input){
	tokens = input.split(' ');
	
	response1 = tokens[0];
    
{
	console.log("Response:", response1);
	
    
    if(response1 === "Good"){
        console.log("Glad to hear, what are you up to today?");
    }
    if(response1 === "Bad"){
        console.log("I'm sorry to hear that, is there anything I can do for you?")
    }
    if(response1 === "Okay"){
        console.log("Well that's better than bad!");
    }
}
    
	// This line closes the connection to the command line interface.
	

	});