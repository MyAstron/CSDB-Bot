module.exports = {
  priv: async (Discord, Util, Bot, prefix, args, cmd, message, Notas, priv) => {

    switch (priv){
      case 'Si':
          notas = 'Privado'
          flip = 'Publico'
          emoji = "<:closed_unlock_with_key:958077970654851132>"
        break;
      case 'No':
          notas = 'Publico'
          flip = 'Privado'
          emoji = "🔐"
        break;
    }
    
    const Priv = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .addFields({
        "name": "🔑 Tu Libro es `"+notas+"`",
        "value": "\n> Deseas Cambiar a **"+flip+"**\n"+emoji+" ⮞ Confirmar\n <:no:885621446615908422> ⮞ Cancelar"
      })
      .setColor("87CEFA")
    const Now = new Discord.MessageEmbed()
      .setDescription(emoji+" Tu Libro Ahora es `"+flip+"`")
      .setColor("87CEFA")
    const Cancel = new Discord.MessageEmbed()
      .setDescription("🔑 Tu Libro Sigue Siendo `"+notas+"`")
      .setColor("87CEFA")
    
    message.channel.send(Priv).then(m => {
      m.react(emoji)
      m.react("<:no:885621446615908422>")
      m.awaitReactions((react, user) => {
        if(user.id == message.author.id){
          if(react.emoji.name == "🔐"){
            Notas.set(message.author.id+".priv", "Si")
            m.delete()
              message.channel.send(Now)
            
          }else
          if(react.emoji.id == "958077970654851132"){
            Notas.set(message.author.id+".priv", "No")
            m.delete()
              message.channel.send(Now)
            
          }else
          if(react.emoji.id == "885621446615908422"){
            m.delete()
              message.channel.send(Cancel)
          }
        }else
        if(user.id != Bot.user.id){
          react.users.remove(user.id)
        }
      })
    })
  }
}