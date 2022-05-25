module.exports = {
  descripcion: "``` Crea una Ruleta para tomar Desiciones!```",
  advertencia: '``` • 10 Opciones Maximo!```',
  ejemplo: '```ruleta Opcion 1 - Opcion 2 - Opcion.... 10```',
  requisitos: "``` Usuario ⮞ Enviar Mensajes         \n Bot     ⮞ Enviar Mensajes```",
  extra: {
    name: "Ninguna!",
    value: ""
  },
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let opcion = args.join(" ").split("-")

    if(!opcion[1]){
      message.channel.send("¡Minimo Coloca 2 Opciones!")/*
    }else
    if(opcion[10]){
      message.channel.send("¡Solo pudes Colocar 10 Opciones!")*/
      setTimeout(() =>{ message.channel.send("La Forma adecuada es:\n> `"+prefix+"ruleta Opcion 1 - Opcion 2 - Opcion.... 10`")}, 1000);
    }else{
      var numero = Math.floor(Math.random() * opcion.length)
      
      const Ruleta = new Discord.MessageEmbed()
        .setAuthor("Rueda, ruda la Ruleta...", "https://c.tenor.com/H9XKpWKu2cQAAAAC/imoneyslots.gif")
        .setColor("87CEFA")

      let respuesta;
      for (var i = 0; i <= opcion.length; i++) {
        respuesta = respuesta+"\n"+(opcion[i] == opcion[numero] ? "> **"+opcion[numero]+"**" : opcion[i])+""
      }
let mensaje = respuesta
for(let i = 0; mensaje.includes("undefined"); i++){
    mensaje = mensaje.replace(/undefined/g, ' -------------------- ');
}
      
      message.channel.send(Ruleta).then(m => {
        setTimeout(() => { m.edit({
            content: "Ruleta de "+message.author.username,
            embed: Ruleta
              .setAuthor("La ruleta Tiene como respuesta..")
              .setDescription(mensaje)
        })}, 1500)
      })
    }
  }
}