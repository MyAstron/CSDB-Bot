module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
const Database = require("@replit/database")
const Notas = new Database()
    let nota = args.join(" ")
    let mention = message.mentions.users.first() 
    mention ? nota = args.slice(1).join(" ") : ''
    
Notas.get(message.author.id+".1").then(note1 => {
Notas.get(message.author.id+".2").then(note2 => {
Notas.get(message.author.id+".3").then(note3 => {
Notas.get(message.author.id+".4").then(note4 => {
Notas.get(message.author.id+".5").then(note5 => {
/*Notas.get(message.author.id+".priv").then(key => {

  if(key != 'Si' || key != 'No'){
    Notas.set(message.author.id+".priv", "Si")
  }*/

Notas.get(message.author.id+".priv").then(priv => {
  
  if(mention && mention.id != message.author.id){
    console.log(priv)
    if(priv == 'No'){
      const LibroM = require("./notas/mencion.js")
        LibroM.use(Discord, Util, Bot, prefix, args, cmd, message, Notas, mention, priv)
    }else{
  const Libro = require("./notas/other.js")
    Libro.other(Discord, Util, Bot, prefix, args, cmd, message, Notas, mention, priv)
    }
    
  }else
  if(args[0] == 'priv'){
  const Libro = require("./notas/priv.js")
    Libro.priv(Discord, Util, Bot, prefix, args, cmd, message, Notas, priv)
    
  }else
  if(nota){
  const Libro = require("./notas/new.js")
    Libro.new(Discord, Util, Bot, prefix, args, cmd, message, Notas, nota, note1, note2, note3, note4, note5)
    
  }else{
  const Libro = require("./notas/nada.js")
    Libro.nada(Discord, Util, Bot, prefix, args, cmd, message, Notas, note1, note2, note3, note4, note5)
  }

// })
})
})
})
})
})
})
    
  }
}