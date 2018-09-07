var inputs = process.argv.slice(2); // Returns array of arguments

var firstLetterOfArguments = inputs.map(argument => argument.charAt(0));

var concatStringsInArray = firstLetterOfArguments.reduce((finalString, firstLetterOfArguments) => finalString + firstLetterOfArguments);

//console.log(inputs, firstLetterOfArguments, concatStringsInArray);
console.log(`[${inputs}] becomes "${concatStringsInArray}"`);
