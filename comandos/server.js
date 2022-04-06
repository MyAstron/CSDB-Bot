module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let verificacion = { "NONE": "<:modNone:950482507852300288>", "LOW": "<:modLow:950482508204617798>", "MEDIUM": "<:modMedium:950482507554517082>", "HIGH": "<:modHigh:950482507093143562>", "HIGHEST": "<:modHighest:950482508716327062>" }
    
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("87CEFA")
      .setDescription("> **"+verificacion[message.guild.verificationLevel]+message.guild.name+"**\n Contiene **"+message.guild.channels.cache.filter(x => x.type === "category").size+"** categorias con **"+((message.guild.channels.cache.size)-(message.guild.channels.cache.filter(x => x.type === "category").size))+"** canales en total.")
      .addFields({
        "name": "\👑 Dueño:",
        "value": "<@"+message.guild.owner+">, `"+message.guild.ownerID+"`",
        "inline": false
      },{
        "name": "\👥 Usuarios:",
        "value": " ``` "+((message.guild.memberCount)-(message.guild.members.cache.filter(m => m.user.bot).size))+" humans. ```",
        "inline": true
      },{
        "name": "\🤖 Bot's:",
        "value": "``` "+message.guild.members.cache.filter(m => m.user.bot).size+" robots. ```",
        "inline": true
      },{
        "name": "\📅 Fecha de Creacion:",
        "value": "```"+message.guild.createdAt.toLocaleDateString("en-us")+" (MM/DD/YY)```",
        "inline": false
      },{
        "name": "\🏅 Roles:",
        "value": " ``` "+message.guild.roles.cache.size+" roles. ```",
        "inline": true
      },{
        "name": "\🙂 Emojis:",
        "value": "``` "+message.guild.emojis.cache.size+" emojis. ```",
        "inline": true
      })
      .setFooter("Solicitud").setTimestamp()
    message.channel.send(embed);
    
  }
}