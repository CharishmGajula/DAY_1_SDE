
//----------------------------------------------------------------------------------
// [Easy] 
// Declare a variable named favoriteFood using const 
// and assign it a string value of your favorite food. 
// Print it to the console.

const favoriteFood="MUDHAPAPPU_AVAKAYA"
console.log(favoriteFood)

//[OUTPUT] 
// [Running] node "c:\SDE WEEK1\DAY1_ASSIGNMENT\PART-1.JS"
//MUDHAPAPPU_AVAKAYA

//---------------------------------------------------------------------------------

// [Easy] 
// Create two variables, numA and numB, 
// and assign them number values. 
// Write an if/else statement to 
// print which number is larger or 
// if they are equal.


let numA=10;
let numB=15;
if(numA>numB)
{
    console.log(`${numA} is greater than ${numB}`);
}
else if(numB>numA)
{
    console.log(`${numB} is greater than ${numA}`);
}
else
{
    console.log(`${numA} is equal to ${numB}`);
}

//[OUTPUT]
//[Running] node "c:\SDE WEEK1\DAY1_ASSIGNMENT\PART-1.JS"
//15 is greater than 10

//----------------------------------------------------------------------

//[Medium] 
// Write a for loop that prints the numbers from 1 to 20. 
// For multiples of 3, print "Fizz" instead of the number. 
// For multiples of 5, print "Buzz". 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz".

for(let i=1;i<=20;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("FizzBuzz");
    }
    else if(i%3==0)
    {
        console.log("Fizz");
    }
    else if(i%5==0)
    {
        console.log("Buzz");
    }
}


//[OUTPUT]
//Fizz
// Buzz
// Fizz
// Fizz
// Buzz
// Fizz
// FizzBuzz
// Fizz
// Buzz

//---------------------------------------------------------------------