
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
[Question]
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

## PART-3
### [EASY]
[Qustion]
Create an object named movie with properties for title, director, and releaseYear. Print the title of the movie to the console.

[Code]
<pre>
const movie=
    {
    title:"Bahubali",
    director:"Rajmouli",
    releaseYear:2016
    }
console.log(movie.title)
</pre>

[OUTPUT]

<img width="326" alt="part3_easy" src="https://github.com/user-attachments/assets/c92292d1-cd69-41e4-9cbd-6343dbe7d6df" />


### [MEDIUM-1]
[Qustion]
Write a function called printUserDetails that takes a user object as an argument. The user object will have name, email, and age properties. The function should use object destructuring in its parameters to print a string like: "User's name is [NAME], and they are [AGE] years old."

[Code]
<pre>
const user={
    name:"Charishma",
    email:"charishma.gajula@minfytech.com",
    age:21
}
function printUserDetails({name,email,age})
{
    console.log(`User's name is ${name}, and they are ${age} years old.`)
}
printUserDetails(user)
</pre>

[OUTPUT]

<img width="336" alt="part3_medium1" src="https://github.com/user-attachments/assets/2e4a3732-81a6-4c00-bea7-0b797b2fc172" />


### [MEDIUM-2]
[Qustion]
Create an array of user objects. Each object should have an id and a username. Use the find method to find the user with a specific id.

[Code]
<pre>
const users=[
    {
        id:1,
        username:"charishma_gajula"
    },
    {
        id:2,
        username:"Pranay_sampathi"
    },
    {
        id:3,
        username:"Sameeksha_Golla"
    }
]

console.log(users.find(user=>user.id==3))
</pre>

[OUTPUT]

<img width="352" alt="part3_medium2" src="https://github.com/user-attachments/assets/8f5a42de-1398-47ae-9fb7-a1eb085b80df" />


## PART-4

### [HARD-1]
[Qustion]
1. Write a function called `getHighAchievers`. This function should accept two arguments: an array of student objects and a `passingScore` number. Each student object will look like this: `{ id: 1, name: 'Alice', score: 85 }`.
    - The function should **filter** the students to get only those with a score greater than or equal to `passingScore`.
    - It should then use **map** to return a new array containing only the names of the high-achieving students, in all uppercase letters.
    - Example: `getHighAchievers(students, 80)` might return `["ALICE", "BOB"]`.

[Code]
<pre>
const students=[
    {
        id:1,
        name:"charishma",
        score:80
    },
    {
        id:2,
        name:"Sameeksha",
        score:95
    },
    {
        id:3,
        name:"Akash",
        score:25
    }
]

function getHighAchievers(students,passingScore)
{
    let students_passed=students.filter(student=>student.score>=passingScore);
    let student_names=students_passed.map(student=>student.name.toUpperCase())
    console.log(student_names)

}
getHighAchievers(students,75)

</pre>

[OUTPUT]

<img width="326" alt="part4_hard1" src="https://github.com/user-attachments/assets/8fe3ec1d-d10e-46ca-8671-119d7eeef0e4" />




### [HARD-2]
[Qustion]
2.  Write a function called `createGame`.
    - This function should not take any arguments.
    - Inside `createGame`, create a "private" variable called `secretNumber` and assign it a random number between 1 and 10.
    - `createGame` should **return another function**. Let's call this inner function `guess`.
    - The returned `guess` function should accept one argument, a number.
    - When you call `guess`, it should compare the guessed number to the `secretNumber` it remembers (this is a **closure**!).
    - It should log "You guessed it!", "Too high!", or "Too low!".
    - Test it:

[Code]
<pre>

function createGame()
{
    const secretNumber=Math.floor(Math.random() * 10) + 1;
    return function guess(number)
    {
        if(number===secretNumber)
        {
            console.log("You guessed it!");
        }
        else if(number>secretNumber)
        {
            console.log("Too high!");
        }
        else{
            console.log("Too low!");
        }
    }
}
const game=createGame()
game(9)
game(10)
game(5)
</pre>

[OUTPUT]
<img width="358" alt="part4_hard2" src="https://github.com/user-attachments/assets/e4bbd0b2-cdc4-489d-b65c-de2f9852ea3e" />



