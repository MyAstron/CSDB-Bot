module.exports = {
  descripcion: "``` Checa la IP de Minecraft!```",
  advertencia: '**Ninguna**',
  ejemplo: '```ip```',
  requisitos: "``` Usuario ⮞ Enviar Mensages          \n\n Bot     ⮞ Enviar Mensages```",
  extra: {
    name: "Juego",
    value: "```Version     ⮞ 1.16.5\nPlataforma  ⮞ Java 8\n```"
  },
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    if(message.mentions.channels.first()){
      canal = message.mentions.channels.first()
    }else
    if(message.mentions.users.first()){
      canal = message.mentions.users.first()
    }else{
      canal = message.channel
    }

    
    const Awaiting = new Discord.MessageEmbed()
      .setAuthor(`Cargando IP…`, `https://i.ibb.co/d5VdmNs/discord-loading.gif`)
      .setColor("87CEFA")
    const IP = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("87CEFA")
      .setDescription("> Depende la PLataforma que utilizes \n\n> <:mc:956571440755380245> -> `Bedrock Edition`/`Poket Edition`\n> <:java:956577467592745001> -> `Java Edition`")
      .setFooter("*Reacciona").setTimestamp()
    const MC = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("87CEFA")
      .setDescription("> <:mc:956571440755380245> -> `Bedrock Edition`/`Poket Edition`\n\n**IP**: `Comunidad_SDB.aternos.me`\n**Puerto**: `46838`")
      .setFooter("Version: 1.16.5.2").setTimestamp()
    const JAVA = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("87CEFA")
      .setDescription("> <:java:956577467592745001> -> `Java Edition`\n\n**IP**: `Comunidad_SDB.aternos.me:46838`")
      .setFooter("Version 1.16.5").setTimestamp()

    
    canal.send(Awaiting).then(m => {
      m.react("<:mc:956571440755380245>"); m.react("<:java:956577467592745001>")
      m.awaitReactions((react, user) => {
        if(user.id === '950422607931514970' && react.emoji.id == '956577467592745001'){
          m.edit(IP)
        }else
        if(user.id === message.author.id){
          if(react.emoji.id === '956571440755380245'){
            m.edit(MC)
          react.users.remove(user.id)
          }else
          if(react.emoji.id === '956577467592745001'){
            m.edit(JAVA)
          react.users.remove(user.id)
          }
        }else
        if(user.id != Bot.user.id){
          react.users.remove(user.id)
        }
      })
    })
  }
}