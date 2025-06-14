
# Day 1 Assignment

## Part 1 
### [Easy1]
[Question]
Declare a variable named favoriteFood using const and assign it a string value of your favorite food. Print it to the console.

Code
<pre>
const favoriteFood="MUDHAPAPPU_AVAKAYA"
</pre>

console.log(favoriteFood)

[OUTPUT]

<img width="374" alt="part1_easy" src="https://github.com/user-attachments/assets/efaeb4be-3058-44ed-9f21-19b8555642a6" />


### [EASY2]
[Question]
Create two variables, numA and numB, and assign them number values. Write an if/else statement to print which number islarger or if they are equal.

[Code]
<pre>
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
</pre>

[OUTPUT]

<img width="324" alt="part1_easy2" src="https://github.com/user-attachments/assets/cbc1e63a-65d5-4829-9889-ade2f94d491b" />



### [MEDIUM]
[Question]
Write a for loop that prints the numbers from 1 to 20. For multiples of 3, print "Fizz" instead of the number. For multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

[Code]
<pre>
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
</pre>

[OUTPUT]

<img width="335" alt="part1_medium" src="https://github.com/user-attachments/assets/121cc614-ed3d-4682-98a7-914b614311e4" />


## PART-2
### [EASY]
[Question]
1.  Create an array named `colors` with three of your favorite colors.
    - Add a fourth color to the end of the array.
    - Add a new color to the beginning of the array.
    - Print the final array to the console.
      
[CODE]
<pre>
const colors=["blue","black","white"];
colors.push("green");
colors.unshift("Lavender");
console.log(colors);
</pre>

[OUTPUT]
<img width="329" alt="part2_easy" src="https://github.com/user-attachments/assets/a9311e10-9ab7-44ed-9241-ab5e3a7f0034" />


### [MEDIUM-1]
[Question]
Given the array let numbers = [10, 20, 30, 40, 50];, use the map method to create a new array where each number is increased by 5.

[CODE]
<pre>
function incrementBy5(num)
{
    return num+5;
}
let numbers=[10,20,30,40,50];
let updated=numbers.map(incrementBy5)
console.log(updated) 
</pre>

[OUTPUT]
<img width="329" alt="part2_medium1" src="https://github.com/user-attachments/assets/10690a90-0814-483a-877c-bf55762f45e9" />


### [MEDIUM-2]
Given the array let scores = [25, 80, 45, 95, 60, 75];, use the filter method to create a new array containing only the scores that are 70 or higher.

[CODE]
<pre>
let scores = [25, 80, 45, 95, 60, 75];
let updated_scores=scores.filter(num=>num>70)
console.log(updated_scores)
</pre>

[OUTPUT]
<img width="337" alt="part2_medium2" src="https://github.com/user-attachments/assets/e51f3f9c-6312-429f-8183-98d8ab17f2df" />



### [HARD]
Use the reduce method on the scores array from the previous question to calculate the average score. (Hint: sum all scores and then divide by the number of scores).

[CODE]
<pre>
sum_of_scores=scores.reduce((sum,curr)=>{
    return sum+curr;
});
console.log(sum_of_scores/scores.length)  
</pre>

[OUTPUT]
<img width="334" alt="part2_hard" src="https://github.com/user-attachments/assets/e52bf6b9-960f-46cd-ab11-b61ea6c71ce9" />

