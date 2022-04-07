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

  if(mention && mention.id != message.author.id){
    
  const Libro = require("./notas/other.js")
    Libro.other(Discord, Util, Bot, prefix, args, cmd, message, Notas, mention)
  }else
  /*if(note5){
    
  const Libro = require("./notas/5.js")
    Libro.nota5(Discord, Util, Bot, prefix, args, cmd, message, Notas, note1, note2, note3, note4, note5)
  }else
  if(note4){
    
  const Libro = require("./notas/4.js")
    Libro.nota4(Discord, Util, Bot, prefix, args, cmd, message, Notas, note1, note2, note3, note4)
  }else
  if(note3){
    
  const Libro = require("./notas/3.js")
    Libro.nota4(Discord, Util, Bot, prefix, args, cmd, message, Notas, note1, note2, note3)
  }else
  if(note2){
    
  const Libro = require("./notas/2.js")
    Libro.nota4(Discord, Util, Bot, prefix, args, cmd, message, Notas, note1, note2)
  }else
  if(note1){
    
  const Libro = require("./notas/1.js")
    Libro.nota4(Discord, Util, Bot, prefix, args, cmd, message, Notas, note1)
  }else*/
  if(nota){
    
  const Libro = require("./notas/new.js")
    Libro.new(Discord, Util, Bot, prefix, args, cmd, message, Notas, nota, note1, note2, note3, note4, note5)
    
  }else{
  const Libro = require("./notas/nada.js")
    Libro.nada(Discord, Util, Bot, prefix, args, cmd, message, Notas, note1, note2, note3, note4, note5)
  }
    
})
})
})
})
})
    
  }
}