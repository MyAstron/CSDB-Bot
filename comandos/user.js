module.exports = {
  descripcion: "``` Mira Informacion Oficial Mas profunda de un Usuario.```",
  advertencia: '**Ninguna**',
  ejemplo: '```user [@user]```',
  requisitos: "``` Usuario ⮞ Enviar Mensages          \n\n Bot     ⮞ Enviar Mensages```",
  extra: {
    name: "**Ninguna**",
    value: ""
  },
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member

    let estado;
    let status;
      switch (user.presence.status) {
          case "online":
              status = "<:online:958095132031332463>"
            break;
          case "dnd":
              status = "<:dnd:958095131838398544>"
            break;
          case "idle":
              status = "<:idle:958095131783864401>"
            break;
          case "offline":
              status = "<:offline:958095131918086215>"
            break;
      }
      switch (user.presence.status) {
          case "online":
              estado = "En Linea"
            break;
          case "dnd":
              estado = "No Molestar"
            break;
          case "idle":
              estado = "Ausente"
            break;
          case "offline":
              estado = "Desconectado"
            break;
      }

    let actividad;
    if(user.presence.activities[0]){
      if(user.user.presence.game){
        actividad = estado
      }else{
        if(!user.user.bot){
          actividad = user.presence.activities[0].state
        }else{
          actividad = estado
        }
      }
    }else{
      actividad = estado
    }
    
    let clientStatus = {
      desktop: "<:pc:847842651742404668> Pc",
      web: "<:web:847864743880163388> Web",
      mobile: "<:celphone:847842652229468170> movil",
    }
    let badges1 = {
      'HOUSE_BRAVERY': '<:HOUSE_BRAVERY:958121020907196417>',
      'HOUSE_BRILLIANCE': '<:HOUSE_BRILLIANCE:958121020861055017>',
      'HOUSE_BALANCE': '<:HOUSE_BALANCE:958121021054005258>',
      'VERIFIED_BOT': '<:BOT:958121212876304394> Bot',
    }
    const User = new Discord.MessageEmbed()
      .setDescription(status+actividad)
      .addFields({
        name: "__🪧 Apodo__",
        value: "``` "+ (user.nickname ? user.nickname : "No tiene.") +"```", 
        inline: true 
      },{
        name: "__"+"\🏷️ Tag__",
        value: "``` "+`#${user.user.discriminator}`+"```",
        inline: true
      },{
        name: "__🆔 ID__",
        value: "``` "+user.user.id+"```",
        inline: true
      },{
        name: "<a:logros_discord:885621447492501504> Medallas",
        value: user.user.flags.toArray().length ? user.user.flags.toArray().map(badge => badges1[badge]).join(' ') : "``` No tiene Medallas.```",
        "inline": true
      },{
        name: 'Fecha de Creacion: ',
        value: "``` "+user.user.createdAt.toLocaleDateString("es-pe")+"```",
        inline: true
      },{
        name: 'Entro a '+message.guild.name+' el: ',
        value: "``` "+user.joinedAt.toLocaleDateString("es-pe")+"```",
        inline: true
      },{
        name: 'Roles: ',
        value: user.roles.cache.map(role => role.toString()).join(", ")
      })
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setColor("87CEFA")
      .setFooter("Solicitud ").setTimestamp()

    
    message.channel.send(User)
  }
}