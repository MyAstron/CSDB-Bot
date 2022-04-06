/*module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let user  = args.join(" ")
      !user ? message.channel.send('Tienes que Ingresar un Usuario Premiun de Minecraft!') : message.channel.send("> Navega entre toda la Informacion\nDatos de `"+user+"`.").then(m => {
      const Profile = new Discord.MessageEmbed()
        .setAuthor(user, "https://minotar.net/armor/bust/"+user+"/190.png", 'https://minecraftskinstealer.com/profile/'+user)
        .setDescription("> Si quieres Usar su Cabeza puedes usar estos Comandos:")
        .addFields({
          "name": "Minecraft v^1.13.+",
          "value": "```ml\n'/give @s minecraft:player_head{SkullOwner:\""+user+"\"}```",
          "inline": true
        },{
          "name": "Minecraft v^1.12.-",
          "value": "```ml\n'/give @p minecraft:skull 13{SkullOwner:\""+user+"\"}```",
          "inline": true
        },{
          "name": "Armond Stand",
          "value": "```ml\n'/replaceitem entity @p slot.armor.head minecraft:skull 1 3 {SkullOwner:\""+user+"\"} ```",
          "inline": false
        })
        .setColor("87CEFA")
        .setFooter("*"+user+" debe ser Premiun").setTimestamp()
        .setThumbnail("https://minecraftskinstealer.com/api/v1/skin/render/qrcode/"+user)


      /*m.react("")
      m.edit({
        content: "> Navega entre toda la Informacion\nDatos de `"+user+"`.",
        embed: Profile
      })/
    })
  }
}*/