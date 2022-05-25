module.exports = {
  run: async(Discord, Util, Bot, prefix, args, cmd, message) => {
    let positivas = ["Sip", "️Asi es!!", "Por su puesto", "Claro que si", "Me imagino que si"];
    let negativas = ["Nop", "Para nada", "Negativo", "Claro que no","No lo imagino"];
    let neutrales = ["Repitela pregunta. Porfavo", "Disculpa, ¿Que?", "No lo se", "No te puedo Responder ahora. Lo Siento"];
    let caritas = ["0.o", "(?", "|?)", "0.0", "^¿^", "'7w7?", "-w-'"];
    let respuestas = [
      positivas[Math.floor(Math.random() * positivas.length)],
      negativas[Math.floor(Math.random() * negativas.length)],
      neutrales[Math.floor(Math.random() * neutrales.length)],
      caritas[Math.floor(Math.random() * caritas.length)]];
    const resRand = respuestas[Math.floor(Math.random() * respuestas.length)];

    if(!args.join(" "))return message.channel.send("¿A que tengo que Responder?");
    
    const Ball8 = new Discord.MessageEmbed()
      .setAuthor("Analizando...", "https://i.ibb.co/R0dVXF0/5619-megathonk.gif")
      .setColor("87CEFA")

    message.channel.send(Ball8).then(m => {
      setTimeout(() => { m.edit({
          content: args.join(" "),
          embed: Ball8
            .setAuthor(resRand, message.author.avatarURL({ dynamic: true }))
          }
      )}, 1500)
    })
  }
}