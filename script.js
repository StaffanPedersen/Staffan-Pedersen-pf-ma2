// Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

var petArray = ["cat", "cow", "dog"];

// Console log the value of the second item in petArray.

console.log(petArray.cow);

// Add the item "sheep" to petArray using the push method.

petArray.push("sheep");

// Console log how many items there are now in petArray using the length method.

console.log(petArray);

// Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.

var catObject = { 
    name: "Kitty",
    colour: "Black",
    age: "3"
};

// Console log the value of the third property of catObject.

console.log(catObject.age)

// Take the value of catObject (the {} part) and place it inside an array called catArray.

var catArray = [
    {
    name: "Kitty",
    colour: "Black",
    age: "3"    
    }
];

// Loop through catArray and console log each property of each object inside (there will be only 1 object inside).

for(var i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);
}

// Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.

function logToConsole(answer)  {

    console.log(answer);

}

// Call the logToConsole function and pass in the value "donkey".

logToConsole("donkey");