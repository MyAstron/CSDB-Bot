module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let user  = message.mentions.users.first()
    if(!user) user = message.author
    const Avatar = new Discord.MessageEmbed()
      .setAuthor(user.username+'#'+user.discriminator, message.author.avatarURL(), user.avatarURL())
      .setColor("87CEFA")
      .setImage(user.avatarURL({ dynamic: true, size: 1024 }))
    message.channel.send(Avatar)
  }
}