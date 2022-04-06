module.exports = {
  descripcion: "``` Serie de Preguntas del Temas que quieras!```",
  advertencia: '``` • Preguntas Random!```',
  ejemplo: '```trivia <tema>```',
  requisitos: "``` Usuario ⮞ Enviar Mensages          \n Bot     ⮞ Enviar Mensages```",
  extra: {
    name: "Temas de Trivia",
    value: "```rnd  ⮞ Random```"
  },
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let trivia = args[0]
    let trivias = ["rnd"]

    if(trivias.some(t => trivia != t)){
      message.channel.send("¡Dato Erroneo!").then(m => {
        setTimeout(function(){ m.channel.send('Utiliza\n> `-help trivia`') }, 1000)
      })
    }else{
    try{
    const triviaFile = require("../trivias/"+trivia+"/"+trivia+".js")
      triviaFile.trivia(Discord, Util, Bot, prefix, args, trivia, message)
    }catch(e){
      message.channel.send("No se encontro la Trivia")
    }
  }
  }
}