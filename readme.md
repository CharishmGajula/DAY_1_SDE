
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



[MEDIUM]
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



