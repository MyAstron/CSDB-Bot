module.exports = {
  new: async(Discord, Util, Bot, prefix, args, cmd, message, Notas, nota, note1, note2, note3, note4, note5) => {
    const New = new Discord.MessageEmbed()
      .setAuthor("✏️ • ¿Deseas Agregar una Nota?", message.author.avatarURL({ dynamic: true}))
      .setColor("87CEFA")
      .setDescription("``` "+nota+"```")
    const Si = new Discord.MessageEmbed()
      .setAuthor("✔️ • ¡Nota Añadida!", message.author.avatarURL({ dynamic: true }))
      .setColor("87CEFA")
    const No = new Discord.MessageEmbed()
      .setAuthor("❌ • ¡No se Añadio la Nota!", message.author.avatarURL({ dynamic: true}))
      .setColor("87CEFA")
    const Error = new Discord.MessageEmbed()
      .setAuthor("📋 • ¡Tu Libro esta Lleno!")
      .setColor("faa687")
    
    message.channel.send(New).then(m => {
      m.react("<:okey:960957932068036648>")
      m.react("<:not:960957931698941972>")
      m.awaitReactions((react, user) => {
        if(user.id == message.author.id){
          if(react.emoji.id == "960957932068036648"){
            if(note1){
              if(note2){
                if(note3){
                  if(note4){
                    if(note5){
                      m.delete(); message.channel.send(Error)
                    }else{
                      Notas.set(message.author.id+".5", `${nota}`).then(n => {
                        m.delete(); message.channel.send(Si)
                      })
                    }
                  }else{
                    Notas.set(message.author.id+".4", `${nota}`).then(n => {
                      m.delete(); message.channel.send(Si)
                    })
                  }
                }else{
                  Notas.set(message.author.id+".3", `${nota}`).then(n => {
                    m.delete(); message.channel.send(Si)
                  })
                }
              }else{
                Notas.set(message.author.id+".2", `${nota}`).then(n => {
                  m.delete(); message.channel.send(Si)
                })
              }
            }else{
              Notas.set(message.author.id+".1", `${nota}`).then(n => {
                m.delete(); message.channel.send(Si)
              })
            }
            
            react.users.remove(user.id)
          }else
          if(react.emoji.id == "960957931698941972"){
            m.delete()
            message.channel.send(No)
            react.users.remove(user.id)
          }
        }else
        if(user.id != Bot.user.id){
          react.users.remove(user.id)
        }
      })
    })
  }
}