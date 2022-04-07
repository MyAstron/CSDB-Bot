module.exports = {
  nada: async(Discord, Util, Bot, prefix, args, cmd, message, Notas, note1, note2, note3, note4, note5) => {
  if(!note1 && !note2 && !note3 && !note4 && !note5){
    const Nada = new Discord.MessageEmbed()
      .setColor("87CEFA")
      .setAuthor("📚 • ¡Aun no tienes Anotaciones!", message.author.avatarURL({ dynamic: true}))
    message.channel.send(Nada)
  }else{

    const Awaiting = new Discord.MessageEmbed()
      .setAuthor(`Actualizando Cuaderno…`, `https://i.ibb.co/d5VdmNs/discord-loading.gif`)
      .setColor("87CEFA")
    const Panel = new Discord.MessageEmbed()
      .setAuthor("📘 • Libro de "+message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setColor("87CEFA")
    const Basurero = new Discord.MessageEmbed()
      .setAuthor("🗑️ • Funcion del Basurero", message.author.avatarURL({ dynamic: true}))
      .setColor("87CEFA")
      .setDescription("> Sirve para Eliminar una Nota, Segun la Reaccion")
      .setFooter("¡Si eliminas una nota no se Puede Recuperar!").setTimestamp()
    const pag1 = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note1+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 1/5").setTimestamp()
    
    const pag2 = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note2+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 2/5").setTimestamp()
    
    const pag3 = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note3+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 3/5").setTimestamp()
    
    const pag4 = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note4+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 4/5").setTimestamp()
    
    const pag5 = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true}))
      .setDescription("``` "+note5+"```")
      .setColor("87CEFA")
      .setFooter("Pagina 5/5").setTimestamp()

    message.channel.send(Awaiting).then(m => {
      
      Notas.set(message.author.id+".pag", 0)
      m.react("<:cancel:885671180101648474>")
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
            Notas.set(message.author.id+".pag", 1)
            m.edit(pag1)
            react.users.remove(user.id)
          }else
          if(react.emoji.name == "2️⃣"){
            Notas.set(message.author.id+".pag", 2)
            m.edit(pag2)
            react.users.remove(user.id)
          }else
          if(react.emoji.name == "3️⃣"){
            Notas.set(message.author.id+".pag", 3)
            m.edit(pag3)
            react.users.remove(user.id)
          }else
          if(react.emoji.name == "4️⃣"){
            Notas.set(message.author.id+".pag", 4)
            m.edit(pag4)
            react.users.remove(user.id)
          }else
          if(react.emoji.name == "5️⃣"){
            Notas.set(message.author.id+".pag", 5)
            m.edit(pag5)
            react.users.remove(user.id)
          }else
          if(react.emoji.id == "885671180101648474"){
            react.users.remove(user.id)
            Notas.get(message.author.id+".pag").then(pag => {
              switch(pag){
                case 1:
                  Notas.delete(message.author.id+".1")
                  m.edit(pag1
                         .setAuthor("🗑️ • ¡Se elimino la Nota 1!", message.author.avatarURL({ dynamic: true}))
                         .setColor("faf187"))
                  break;
                case 2:
                  Notas.delete(message.author.id+".2")
                  m.edit(pag2
                         .setAuthor("🗑️ • ¡Se elimino la Nota 2!", message.author.avatarURL({ dynamic: true}))
                         .setColor("faf187"))
                  break;
                case 3:
                  Notas.delete(message.author.id+".3")
                  m.edit(pag3
                         .setAuthor("🗑️ • ¡Se elimino la Nota 3!", message.author.avatarURL({ dynamic: true}))
                         .setColor("faf187"))
                  break;
                case 4:
                  Notas.delete(message.author.id+".4")
                  m.edit(pag4
                         .setAuthor("🗑️ • ¡Se elimino la Nota 4!", message.author.avatarURL({ dynamic: true}))
                         .setColor("faf187"))
                  break;
                case 5:
                  Notas.delete(message.author.id+".5")
                  m.edit(pag5
                         .setAuthor("🗑️ • ¡Se elimino la Nota 5!", message.author.avatarURL({ dynamic: true}))
                         .setColor("faf187"))
                  break;
                case (pag != 1 && pag != 2 && pag != 3 && pag != 4 && pag != 5 && pag):
                  m.edit(Basurero)
                  break;
              }
            })
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
  }
}