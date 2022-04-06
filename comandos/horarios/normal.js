module.exports = {
  use: async (Discord, Util, Bot, prefix, args, cmd, message, canal, ReuID, Pasword, Link, IMG, Fecha, Dias, Lunes, Martes, Miercoles, Jueves, Viernes, dia, clase) => {

    if((Fecha.getHours() >= "13") && (Fecha.getHours() <= '19')){
      switch (Dias[Fecha.getDay()]) {
        case 'Lunes' :
          horario = Lunes[Fecha.getHours()]
          dia = "             'Lunes'"
          break;
        case 'Martes' :
          horario = Martes[Fecha.getHours()]
          dia = "            'Martes'"
          break;
        case 'Miercoles' :
          horario = Miercoles[Fecha.getHours()]
          dia = "           'Miercoles'"
          break;
        case 'Jueves' :
          horario = Jueves[Fecha.getHours()]
          dia = "            'Jueves'"
          break;
        case 'Viernes':
          horario = Viernes[Fecha.getHours()]
          dia = "           'Viernes'"
          break;
      }
    }else{
      switch (Dias[Fecha.getDay()]) {
        case 'Lunes' :
          next = "\"Martes\""
          dia = "             'Lunes'"
          break;
        case 'Martes' :
          next = "\"Miercoles\""
          dia = "            'Martes'"
          break;
        case 'Miercoles' :
          next = "\"Jueves\""
          dia = "           'Miercoles'"
          break;
        case 'Jueves' :
          next = "\"Viernes\""
          dia = "            'Jueves'"
          break;
        case 'Viernes':
          next = "\"Lunes\""
          dia = "           'Viernes'"
          break;
      }
      horario = "Por Ahora No Hay Clases!!\n --> Hasta El "+next+" <-- "
    }

    
    const Awaiting = new Discord.MessageEmbed()
      .setAuthor(`Cargando Panel…`, `https://i.ibb.co/d5VdmNs/discord-loading.gif`)
      .setColor("87CEFA")
    const Panel = new Discord.MessageEmbed()
      .setColor("87CEFA")
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setDescription("```ml\n"+dia+"\n"+horario+"```")
      .setFooter("Mas Utilidades").setTimestamp()
    const Reu = new Discord.MessageEmbed()
      .setColor("87CEFA")
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setDescription("> <:link:958075114916839506> **Link**: **"+Link+"** \n> 🆔 **ID**: `"+ReuID+"`\n> <:closed_unlock_with_key:958077970654851132> **Contaseña**: `"+Pasword+"`")
      .setFooter("Aula Virtual 4to C").setTimestamp()
    const GMI = new Discord.MessageEmbed()
      .setColor("87CEFA")
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setImage(IMG)
      .setFooter("Horario 4to Bachillerato C").setTimestamp()
    
    canal.send(Awaiting).then(m => {
      m.react("<:link:958075114916839506>")
      m.react("<:time:887506263888498728>")
      m.react("<:image:958054027462074428>")
      m.react("<:cancel:885671180101648474>")
      m.awaitReactions((react, user) => {
        if(user.id === '950422607931514970' && react.emoji.id == '885671180101648474'){
          m.edit(Panel)
        }else
        if(user.id === message.author.id){
          if(react.emoji.id == "958075114916839506"){
            m.edit(Reu)
          react.users.remove(user.id)
          }else
          if(react.emoji.id == "887506263888498728"){
            m.edit(Panel)
          react.users.remove(user.id)
          }else
          if(react.emoji.id == "958054027462074428"){
            m.edit(GMI)
          react.users.remove(user.id)
          }else
          if(react.emoji.id == "885671180101648474"){
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