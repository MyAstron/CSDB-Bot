module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {

    let times = ["1500", "1450", "1306", "1208", "1168", "1054"];
  const Awaiting = new Discord.MessageEmbed()
    .setAuthor(`Calculando MS…`, `https://i.ibb.co/d5VdmNs/discord-loading.gif`)
    .setColor("87CEFA")
  const Ping = new Discord.MessageEmbed()  
    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
    .setDescription(`> **:ping_pong: Mi Ping Actual**: ${(-1)*(Math.floor(message.createdTimestamp - Date.now()))}'ms`)
    .setTimestamp()
    .setColor("87CEFA")
    message.channel.send(Awaiting).then(m => {
      setTimeout(() =>{ m.edit(Ping); }, times[Math.floor(Math.random()*times.length)]);
    })
  }
}