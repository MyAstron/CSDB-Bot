module.exports = {
  other: async(Discord, Util, Bot, prefix, args, cmd, message, Notas, mention) => {
    const Nop = new Discord.MessageEmbed()
      .setAuthor("📜 • ¡No Puedo mostrar Archivos Privados!", message.author.avatarURL({ dynamic: true}))
      .setColor("87CEFA")
    const Rot = new Discord.MessageEmbed()
      .setAuthor("🤖 • ¡Los Bot's no pueden tener Anotaciones!", message.author.avatarURL({ dynamic: true}))
      .setColor("87CEFA")

    if(!mention.bot){
      message.channel.send(Nop)
    }else{
      message.channel.send(Rot)
    }
  }
}