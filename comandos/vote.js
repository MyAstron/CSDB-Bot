module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let des = args.join(" ")
    
    message.mentions.channels.first() ? 
      canal =  message.mentions.channels.first() : canal = message.channel
    message.mentions.channels.first() ?
      des = args.slice(1).join(" ") : ''
    
      const Vote = new Discord.MessageEmbed()
        .setTitle("<:rules:887498786916679680> __"+des+"__")
        .setColor("87CEFA")
    
      canal.send(Vote).then(m => {
        m.react("<:okey:960957932068036648>")
        m.react("<:not:960957931698941972>")
      })
    
    
  }
}