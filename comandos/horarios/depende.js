module.exports = {
  use: async (Discord, Util, Bot, prefix, args, cmd, message, canal, ReuID, Pasword, Link, IMG, Fecha, Dias, Lunes, Martes, Miercoles, Jueves, Viernes, dia, clase) => {

    let horario;
    
    
    if(['Lunes', 'lunes', 'lun', '1'].some(d => dia == d)){
          horario = 
`\`\`\`ml
 ${clase[22]}     'Hora'
┌―${clase[21]}┬―――――――――――――――――┐
| ${clase[18]}| (07:00 - 07:15) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[19]}| (07:15 - 07:40) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[1]}| (08:00 - 08:40) |
| ${clase[20]}| (08:50 - 09:30) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[2]}| (09:50 - 10:30) |
| ${clase[3]}| (10:40 - 11:20) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[4]}| (11:40 - 12:20) |
| ${clase[24]}| (12:30 -  1:10) |
└―${clase[21]}┴―――――――――――――――――┘
          Horario Del 'Lunes'
\`\`\``
    }else
    if(['Martes', 'martes', 'mar', '2'].some(d => dia == d)){
          horario = 
`\`\`\`ml
 ${clase[22]}     'Hora'
┌―${clase[21]}┬―――――――――――――――――┐
| ${clase[18]}| (07:00 - 07:15) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[19]}| (07:15 - 07:40) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[5]}| (08:00 - 08:40) |
| ${clase[6]}| (08:50 - 09:30) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[3]}| (09:50 - 10:30) |
| ${clase[7]}| (10:40 - 11:20) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[4]}| (11:40 - 12:20) |
| ${clase[24]}| (12:30 -  1:10) |
└―${clase[21]}┴―――――――――――――――――┘
          Horario Del 'Martes'
\`\`\``
    }else
    if(['miercoles', 'Miercoles', 'mie', '3'].some(d => dia == d)){
          horario = 
`\`\`\`ml
 ${clase[22]}     'Hora'
┌―${clase[21]}┬―――――――――――――――――┐
| ${clase[18]}| (07:00 - 07:15) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[19]}| (07:15 - 07:40) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[8]}| (08:00 - 08:40) |
| ${clase[9]}| (08:50 - 09:30) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[10]}| (09:50 - 10:30) |
| ${clase[11]}| (10:40 - 11:20) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[12]}| (11:40 - 12:20) |
| ${clase[24]}| (12:30 -  1:10) |
└―${clase[21]}┴―――――――――――――――――┘
        Horario Del 'Miercoles'
\`\`\``
    }else
    if(['Jueves', 'jue', 'jueves', '4'].some(d => dia == d)){
          horario = 
`\`\`\`ml
 ${clase[22]}     'Hora'
┌―${clase[21]}┬―――――――――――――――――┐
| ${clase[20]}| (07:00 - 07:15) |
| ${clase[23]}├―――――――――――――――――┤
| ${clase[20]}| (07:15 - 07:40) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[13]}| (08:00 - 08:40) |
| ${clase[5]}| (08:50 - 09:30) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[3]}| (09:50 - 10:30) |
| ${clase[12]}| (10:40 - 11:20) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[4]}| (11:40 - 12:20) |
| ${clase[14]}| (12:30 -  1:10) |
└―${clase[21]}┴―――――――――――――――――┘
          Horario Del 'Jueves'
\`\`\``
    }else
    if(['viernes', 'vie', 'viernes', '5'].some(d => dia == d)){
          horario = 
`\`\`\`ml
 ${clase[22]}     'Hora'
┌―${clase[21]}┬―――――――――――――――――┐
| ${clase[18]}| (07:00 - 07:15) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[19]}| (07:15 - 07:40) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[13]}| (08:00 - 08:40) |
| ${clase[15]}| (08:50 - 09:30) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[8]}| (09:50 - 10:30) |
| ${clase[2]}| (10:40 - 11:20) |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[17]}| (20 min)        |
├―${clase[21]}┼―――――――――――――――――┤
| ${clase[16]}| (11:40 - 12:20) |
| ${clase[24]}| (12:30 -  1:10) |
└―${clase[21]}┴―――――――――――――――――┘
          Horario Del 'Viernes'
\`\`\``
    }else{
          horario = 
`\`\`\`diff
-  No reconozco "${dia}" como un Dia  -
\`\`\``
    }
    
    const Awaiting = new Discord.MessageEmbed()
      .setAuthor(`Buscando Horario…`, `https://i.ibb.co/d5VdmNs/discord-loading.gif`)
      .setColor("87CEFA")
    const Panel = new Discord.MessageEmbed()
      .setColor("87CEFA")
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setDescription(horario)
      .setFooter("Solicitud").setTimestamp()
    const Reu = new Discord.MessageEmbed()
      .setColor("87CEFA")
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setDescription("> <:link:958075114916839506> **Link**: **"+Link+"** \n> 🆔 **ID**: `"+ReuID+"`\n> <:closed_unlock_with_key:958077970654851132> **Contaseña**: `"+Pasword+"`")
      .setFooter("Aula Virtual 4to C").setTimestamp()
    
    canal.send(Awaiting).then(m => {
      m.react("<:link:958075114916839506>")
      m.react("<:image:958054027462074428>")
      m.react("<:cancel:885671180101648474>")
      m.awaitReactions((react, user) => {
        if(user.id === '950422607931514970' && react.emoji.id == '885671180101648474'){
          m.edit({
            content: "Horario del dia **"+dia+"**",
            embed: Panel
          })
        }else
        if(user.id === message.author.id){
          if(react.emoji.id == "958075114916839506"){
          m.edit({
            content: "Link de **Aula Virtual 4to C**",
            embed: Reu
          })
          react.users.remove(user.id)
          }else
          if(react.emoji.id == "958054027462074428"){
            m.edit({
              content: "Horario del dia **"+dia+"**",
              embed: Panel
            })
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