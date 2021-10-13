const JokesJS = require("./src/Kiddings/jokes.js")

class Jokes {
  constructor() {
    let rand = Math.floor(Math.random() * JokesJS.jokes.length)
    return Jokes[rand]
  }
}

let ha = new Jokes()
console.log(ha)
