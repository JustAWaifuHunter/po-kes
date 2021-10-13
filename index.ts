/* Jokes - Part 1 of Index. */
const JokesJS = require("./src/Kiddings/jokes.js");

function Joke(lang: string, x: number) {
  /* Language Select or Default: Portuguese. */
  let language;
  if (!lang || lang == 'pt') {
    language = "pt"
  } else if (lang == 'en') {
    language = "en"
  }
  
  /* Jokes Select or Random. */
  if (x) {
    return JokesJS.jokes[language][x]
  } else {
   let rand = Math.floor(Math.random() * JokesJS.jokes["pt"].length)
    return JokesJS.jokes["pt"][rand]
  }
}