module.exports = {
  use: async(Discord, Util, Bot, prefix, args, cmd, message, Notas, mention, priv) =>{
Notas.get(mention.id+".1").then(note1 => {
Notas.get(mention.id+".2").then(note2 => {
Notas.get(mention.id+".3").then(note3 => {
Notas.get(mention.id+".4").then(note4 => {
Notas.get(mention.id+".5").then(note5 => {
  
    if(!note1 && !note2 && !note3 && !note4 && !note5){
    const Nada = new Discord.MessageEmbed()
      .setColor("87CEFA")
      .setAuthor("📓 • ¡Aun no tiene Anotaciones!", message.author.avatarURL({ dynamic: true}))  
    message.channel.send(Nada)
  }else{

    const Awaiting = new Discord.MessageEmbed()
      .setAuthor(`Actualizando Cuaderno…`, `https://i.ibb.co/d5VdmNs/discord-loading.gif`)
      .setColor("87CEFA")
    const Panel = new Discord.MessageEmbed()
      .setAuthor("📕 • Libro de "+mention.username+'#'+mention.discriminator, message.author.avatarURL({ dynamic: true }))
      .setColor("87CEFA")
    const pag1 = new Discord.MessageEmbed()
      .setAuthor(mention.username+'#'+mention.discriminator, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note1+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 1/5").setTimestamp()
    
    const pag2 = new Discord.MessageEmbed()
      .setAuthor(mention.username+'#'+mention.discriminator, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note2+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 2/5").setTimestamp()
    
    const pag3 = new Discord.MessageEmbed()
      .setAuthor(mention.username+'#'+mention.discriminator, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note3+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 3/5").setTimestamp()
    
    const pag4 = new Discord.MessageEmbed()
      .setAuthor(mention.username+'#'+mention.discriminator, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note4+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 4/5").setTimestamp()
    
    const pag5 = new Discord.MessageEmbed()
      .setAuthor(mention.username+'#'+mention.discriminator, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note5+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 5/5").setTimestamp()

    message.channel.send(Awaiting).then(m => {
      
      note1 ? m.react("1️⃣") : ''
      note2 ? m.react("2️⃣") : ''
      note3 ? m.react("3️⃣") : ''
      note4 ? m.react("4️⃣") : ''
      note5 ? m.react("5️⃣") : ''
      m.react("<:close:958051196231360552>")
      m.awaitReactions((react, user) => {
        if(user.id == Bot.user.id && react.emoji.id == '958051196231360552'){
          m.edit(Panel)
        }else
        if(user.id == message.author.id){
          if(react.emoji.name == "1️⃣"){
            m.edit(pag1)
            react.users.remove(user.id)
          }else
          if(react.emoji.name == "2️⃣"){
            m.edit(pag2)
            react.users.remove(user.id)
          }else
          if(react.emoji.name == "3️⃣"){
            m.edit(pag3)
            react.users.remove(user.id)
          }else
          if(react.emoji.name == "4️⃣"){
            m.edit(pag4)
            react.users.remove(user.id)
          }else
          if(react.emoji.name == "5️⃣"){
            m.edit(pag5)
            react.users.remove(user.id)
          }else
          if(react.emoji.id == '958051196231360552'){
            m.delete()
          }
        }else
        if(user.id != Bot.user.id){
          react.users.remove(user.id)
        }
      })
    })
  }
  
})
})
})
})
})
  }
}