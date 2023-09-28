var name="Annie LoPinto"; 

var myNumber = 22; 

const port = 3000

//Objects -- they have properties and they can also have functions inside of them 
var car ={
    make:"Ford",
    model: "Bronco",
    year: 2023 
    //no need for comma on the last one
} 

//function or methods that return a value
function addTwo(somenumber){
    return somenumber + 2; 
}

//functions that perform a task 
function outputsomething(output){ //we gave them names are meaningful to developer aka for us to understand
    console.log("you wrote" + output);
}

outputsomething("Write something here...I'm having fun with node!");

var result = addTwo(10);

outputsomething(result); 

console.log("car");

//access object properties with "."

outputsomething(car.model);