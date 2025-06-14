
//----------------------------------------------------------------------------------------------

//[Easy] 
// Create an object named movie with properties for title, director, and releaseYear. 
// Print the title of the movie to the console.

const movie={
    title:"Bahubali",
    director:"Rajmouli",
    releaseYear:2016
}
console.log(movie.title)

//[OUTPUT]
//Bahubali

//------------------------------------------------------------------------------------------------

//[Medium] 
// Write a function called printUserDetails 
// that takes a user object as an argument. 
// The user object will have name, email, and age properties.
//  The function should use object destructuring in its parameters 
// to print a string like: "User's name is [NAME], and they are [AGE] years old."



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


//[OUTPUT]
//User's name is Charishma, and they are 21 years old.

//-----------------------------------------------------------------------------------------------------

//[Medium] 
// Create an array of user objects. 
// Each object should have an id and a username.
//  Use the find method to find the user with a specific id.


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
];

console.log(users.find(user=>user.id==3))


//[OUTPUT]
//{ id: 3, username: 'Sameeksha_Golla' }


//---------------------------------------------------------------------------------------------------------

