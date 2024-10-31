// Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.

let name=prompt("Enter your name");
let edad=prompt("Enter your age");
let movies=prompt("Enter a list of your favorite movies separated by a space");
let arrayMovies=movies.split(" ");


console.log(`Mi nombre es ${name} y tengo ${edad} y una de mis peliculas favoritas es ${arrayMovies[2]}`)