module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    const poll = args.join(" ").split("-")
    let des = poll[0]
    let a = poll[1]
    let b = poll[2]
    let c = poll[3]
    let d = poll[4]
    
    message.mentions.channels.first() ? canal = message.mentions.channels.first() : canal = message.channel
    !message.mentions.channels.first() ? '' : 
      des = args.slice(1).join(" ").split("/")[0]
    
    if(poll[5]){
      message.channel.send("Β‘Solo puede Colocar 4 Opciones!")
    }else
    if(!des || !a || !b){
    message.channel.send("Β‘Te faltan Argumentos!").then(m => {
    setTimeout(() =>{ m.channel.send("La Forma adecuada es:\n> `"+prefix+"poll Descripccion o Contexto de la Votacion-Opcion A - Opcion B`")}, 1000);
    })
    }else{
      const Poll = new Discord.MessageEmbed()
        .setFooter("*Reacciona").setTimestamp()
        .addFields({
          "name": "π __"+des+"__",
          "value": 
d ? "\n> π¦ **"+a+"**\n> π§ **"+b+"**\n> π¨ **"+c+"**\n> π© **"+d+"**" : c ? "\n> π¦ **"+a+"**"+"\n> π§ **"+b+"**"+"\n> π¨ **"+c+"**" : "\n> π¦ **"+a+"**"+"\n> π§ **"+b+"**"
        })
        .setColor("87CEFA")
      canal.send(Poll).then(m => {
        m.react("π¦")
        m.react("π§")
        c ? m.react("π¨") : '';
        d ? m.react("π©") : '';
      })
    }
    
    
  }
}