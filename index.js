const JokesJS = require("./src/JokesJS/jokes.js")

class Jokes {
  constructor() {
    let rand = Math.floor(Math.random() * JokesJS.jokes.length)
    return Jokes[rand]
  }
}

let ha = new Jokes()
console.log(ha)