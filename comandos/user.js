module.exports = {
  descripcion: "``` Checa la IP de Minecraft!```",
  advertencia: '**Ninguna**',
  ejemplo: '```user [@user]```',
  requisitos: "``` Usuario ⮞ Enviar Mensages          \n\n Bot     ⮞ Enviar Mensages```",
  extra: {
    name: "**Ninguna**",
    value: ""
  },
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    if(message.mentions.users.first()){
      user = message.mentions.users.first()
    }else{
      user = message.member
    }
    
    let clientStatus = {
      desktop: "<:pc:847842651742404668> Pc",
      web: "<:web:847864743880163388> Web",
      mobile: "<:celphone:847842652229468170> movil",
    }
    let estados = {
      "online": "<:online:958095132031332463> En Line",
      "offline": "<:offline:958095131918086215> Desconectado",
      "idle": "<:idle:958095131783864401> Ausente",
      "dnd": "<:dnd:958095131838398544> No Molestar"
    }
    let badges1 = {
      'HOUSE_BRAVERY': '<:HOUSE_BRAVERY:958121020907196417>',
      'HOUSE_BRILLIANCE': '<:HOUSE_BRILLIANCE:958121020861055017>',
      'HOUSE_BALANCE': '<:HOUSE_BALANCE:958121021054005258>',
      'VERIFIED_BOT': '<:BOT:958121212876304394> Bot',
    }
    
    const User = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setColor("87CEFA")
      .addFields({
        "name": "\🏷️ Tag:",
        "value": `<@${user.id}>`+", `"+user.id+"`",
        "inline": false
      },{
        "name": "<a:vision:956600486335766538> Staus:",
        "value": `${estados[user.presence.status]}`,
        "inline": true
      },{
        "name": "<a:Jump:952975873533964358> Actividad Reciente:",
        "value": user.user.presence.game ? user.user.presence.game.name : "No tiene Actividad",
        "inline": true
      },{
        "name": "<a:logros_discord:885621447492501504> Medallas",
        "value": user.user.flags.toArray().length ? user.user.flags.toArray().map(badge => badges1[badge]).join(' ') : "No tiene Alguna Medalla",
        "inline": true
      },{
        "name": "Fecha de Ingreso a "+message.guild.name,
        "value": "```"+user.joinedAt+"```",
        "inline": false
      })
      .setFooter("Solicitud ").setTimestamp()

    
    message.channel.send(User)
  }
}