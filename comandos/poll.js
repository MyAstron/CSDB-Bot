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
      message.channel.send("¡Solo puede Colocar 4 Opciones!")
    }else
    if(!des || !a || !b){
    message.channel.send("¡Te faltan Argumentos!").then(m => {
    setTimeout(() =>{ m.channel.send("La Forma adecuada es:\n> `"+prefix+"poll Descripccion o Contexto de la Votacion-Opcion A - Opcion B`")}, 1000);
    })
    }else{
      const Poll = new Discord.MessageEmbed()
        .setFooter("*Reacciona").setTimestamp()
        .addFields({
          "name": "📊 __"+des+"__",
          "value": 
d ? "\n> 🇦 **"+a+"**\n> 🇧 **"+b+"**\n> 🇨 **"+c+"**\n> 🇩 **"+d+"**" : c ? "\n> 🇦 **"+a+"**"+"\n> 🇧 **"+b+"**"+"\n> 🇨 **"+c+"**" : "\n> 🇦 **"+a+"**"+"\n> 🇧 **"+b+"**"
        })
        .setColor("87CEFA")
      canal.send(Poll).then(m => {
        m.react("🇦")
        m.react("🇧")
        c ? m.react("🇨") : '';
        d ? m.react("🇩") : '';
      })
    }
    
    
  }
}