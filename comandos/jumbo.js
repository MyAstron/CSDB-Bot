module.exports = {
  run: async(Discord, Util, Bot, prefix, args, cmd, message) => {
    let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
    if(!args[0] || !emoji)return message.channel.send("¡Debes de Colocar un Emoji Personalizado Estatico!")
    const Emoji = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setImage(emoji.url)
      .setColor("87CEFA")
    message.channel.send(Emoji)
  }
}