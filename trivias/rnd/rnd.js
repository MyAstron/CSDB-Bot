module.exports = {
  trivia: async (Discord, Util, Bot, prefix, args, trivia, message) => {
    const trivia = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setDescription('Responde las Preguntas!')
      .addField("Antes de Menudo, Ricky Martin hizo tres comerciales: el primero fue de leche evaporada cuando era bebé; el segundo de un refresco de naranja que apenas podía sostener con ambas manos.\n> ¿Qué más anunció a principios de los años 80?", "🇦 **>** Crayolas\n🇧 **>** Hamburguesas\n🇨 **>** Leche achocolatada\n🇩 **>** Pasta dental")
      .setColor("87CEFA")
      .setTimestamp()
    message.channel.send(trivia).then(m => {
      m.react("🇦"); m.react("🇧"); m.react("🇨"); m.react("🇩");
      m.awaitReactions((react, user) => {
        if(message.author.id == user.id){
          if(react.emoji.name === '🇦'){
            
          }
        }else
        if(user.id != Bot.member.id){
          react.users.remove(user.id)
        }
      })
    })
  }
}