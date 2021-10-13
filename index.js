/* Jokes - Part 1 of Index. */
const JokesJS = require("./src/Kiddings/jokes.js");

function Jokes() {
  let rand = Math.floor(Math.random() * JokesJS.jokes.length)
    return JokesJS.jokes[rand]
}