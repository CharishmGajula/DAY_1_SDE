//-------------------------------------------------------------------------------------

// [Easy]
// Create an array named `colors` with three of your favorite colors.
    // - Add a fourth color to the end of the array.
    // - Add a new color to the beginning of the array.
    // - Print the final array to the console.

const colors=["blue","black","white"];
colors.push("green");
colors.unshift("Lavender");
console.log(colors);

//[OUTPUT]
// [Running] node "c:\SDE WEEK1\DAY1_ASSIGNMENT\PART-2.js"
//[ 'Lavender', 'blue', 'black', 'white', 'green' ]

//-------------------------------------------------------------------------------------------

// [Medium] 
// Given the array let numbers = [10, 20, 30, 40, 50];, 
// use the map method to create a new array where each number is increased by 5.

function incrementBy5(num)
{
    return num+5;
}
let numbers=[10,20,30,40,50];
let updated=numbers.map(incrementBy5)
console.log(updated)

//[OUTPUT]
//[ 15, 25, 35, 45, 55 ]


//---------------------------------------------------------------------------------------------

//[Medium] 
// Given the array let scores = [25, 80, 45, 95, 60, 75];, 
// use the filter method to create a new array containing only the scores that are 70 or higher.

let scores = [25, 80, 45, 95, 60, 75];
let updated_scores=scores.filter(num=>num>70)
console.log(updated_scores)

//[OUTPUT]
//[ 80, 95, 75 ]


//-----------------------------------------------------------------------------------------------

//[Hard] 
// Use the reduce method on the scores array from the previous question 
// to calculate the average score. 
// (Hint: sum all scores and then divide by the number of scores).

sum_of_scores=scores.reduce((sum,curr)=>{
    return sum+curr;
});
console.log(sum_of_scores/scores.length)

//[OUTPUT]
//30

//-------------------------------------------------------------------------------------------------------


