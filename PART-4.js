
//----------------------------------------------------------------------------------------------------------------------

//[Hard]
//  Write a function called `getHighAchievers`. 
// This function should accept two arguments: 
// an array of student objects and a `passingScore` number. 
// Each student object will look like this: `{ id: 1, name: 'Alice', score: 85 }`.
    // - The function should **filter** the students to get only those with 
    // a score greater than or equal to `passingScore`.
    // - It should then use **map** to return a new array containing only the names of the high-achieving 
    // students, in all uppercase letters.
    // - Example: `getHighAchievers(students, 80)` might return `["ALICE", "BOB"]`.


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

//[OUTPUT]
//[ 'CHARISHMA', 'SAMEEKSHA' ]


//--------------------------------------------------------------------------------------------------------

//2. **[Hard]** Write a function called `createGame`.
    // - This function should not take any arguments.
    // - Inside `createGame`, create a "private" variable called `secretNumber` and 
    // assign it a random number between 1 and 10.
    // - `createGame` should **return another function**. Let's call this inner function `guess`.
    // - The returned `guess` function should accept one argument, a number.
    // - When you call `guess`, it should compare the guessed number to the `secretNumber` it 
    // remembers (this is a **closure**!).
    // - It should log "You guessed it!", "Too high!", or "Too low!".
    // - Test it:


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
console.log(game.secretNumber)