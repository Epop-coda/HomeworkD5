
//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/
var test = "String"

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/

var sum = 10 + 20


/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/

var randInt = Math.floor(Math.random() * 20); 
console.log(randInt)

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/
var me = {
    name: "Ebony",
    surname: "Pop",
    age: 27
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.    */


/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/
me.push(["html", "css", "javaS" ])
console.log(me)

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/
delete me [3];

// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/
var dice = function() {
    return diceMath.floor(Math.random() * 20)
}


/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/
var whoIsBigger = function (a, b){ 
    return 
}
/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/

/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/

/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/

/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/

/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/

/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/

/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/

/* Ex.13
    Write the function countMovies that returns the number of movies into the array.
*/

/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/

/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/

/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/

/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/

/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/

/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/