const ms = require("ms")

module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let verificacion = { "NONE": "<:modNone:950482507852300288>", "LOW": "<:modLow:950482508204617798>", "MEDIUM": "<:modMedium:950482507554517082>", "HIGH": "<:modHigh:950482507093143562>", "HIGHEST": "<:modHighest:950482508716327062>" }
    
    const embed = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL())
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setColor("87CEFA")
      .setDescription("> **Mi Infromacion**")
      .addFields({
        "name": "\⚙️ Desarrollador:",
        "value": "<@709393638396002325>, `709393638396002325`",
        "inline": false
      },{
        "name": "\🏰 Estoy en:",
        "value": " ``` "+(Bot.guilds.cache.size)+" Server's. ```",
        "inline": true
      },{
        "name": "\🛠️ Trabajo con:",
        "value": "``` "+(Bot.users.cache.size+1)+" User's. ```",
        "inline": true
      },{
        "name": "\⏰ Tengo:",
        "value": "```"+ms(Bot.uptime, {long: true})+" Online.```",
        "inline": false
      },{
        "name": "\💾 Lenguaje:",
        "value": " ``` JavaScript, Python. ```",
        "inline": true
      },{
        "name": "\📚 Dependencias::",
        "value": "``` Node.js | Discord.js ```",
        "inline": true
      })
      .setFooter("Solicitud").setTimestamp()
    if(args[0] == 'ping'){
      const ping = require("./ping.js")
      ping.run(Discord, Util, Bot, prefix, args, cmd, message)
    }else{
      message.channel.send(embed);
    }
  }
}