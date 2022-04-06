const Database = require("@replit/database")
const csdb = new Database()
const ms = require('ms')

module.exports = {
  descripcion: "``` Crea un Temporizador para Recordatorios entre Canales!```",
  advertencia: '``` • Formatos de Tiempo Unicos!\n • Solo hay un Temporizador por Servidor!\n • No todos Pueden usar este Comando!```',
  ejemplo: '```temp [Canal] <Tiempo> <Formato> <Mensaje>```',
  requisitos: "``` Usuario ⮞ Enviar Mensajes\n         ⮞ Gestionar el Bot\n\n Bot     ⮞ Administrador```",
  extra: {
    name: "Formatos Validos",
    value: "```d    ⮞ Días\nh    ⮞ Horas\nmin  ⮞ Minutos ```"
  },
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
csdb.get("temp").then((temp) => {
  if(temp){
    csdb.get("TMS-temp").then((TMS) => { 
      csdb.get("msg-temp").then((msg) => { 
        csdb.get("can-temp").then((can) => {
          const Ya = new Discord.MessageEmbed()
            .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
            .setTitle('> ¡Ya Hay un Temporizador!')
            .addFields({
              "name": "\📤 Canal de Envio",
              "value": "<#"+can.id+">, `"+can.id+"`",
              "inline": false
            },{
              "name": '\🕰️ Tiempo',
              "value": '``` '+TMS+'```',
              "inline": true
            },{
              "name": "\🔤 Contenido",
              "value": "``` "+msg+" ```",
              "inline": true
            })
            .setColor("87CEFA")
            .setFooter("Solicitud")
            .setTimestamp()
          message.channel.send({
            content: "```prolog\n     • ¡¿Quieres Eliminar El Temporizador?! • ```",
            embed: Ya}).then(m => {
            m.react("<a:trash:951540335262171196>")
            m.react("<a:no:932793223850647613>")
            m.awaitReactions((react, user) => {
              if(user.id == message.author.id){
                if(!message.member.hasPermission("MANAGE_GUILD") && !message.member.roles.cache.has('951118997418553385') && message.author.id != '709393638396002325'){
                  message.channel.send('¡No Puedes Moderar el Temporizador!').then(m => {
                    setTimeout(function(){ m.channel.send('Usuarios Permitidos\n> `Gestionadores del Servidor`\n> `Staff` (<@&951118997418553385>)\n> `Astron` (<@709393638396002325>)') }, 1000)
                  })
                }else
                if(react.emoji.id == '951540335262171196'){
                  csdb.delete("temp").then((t) => {
                    csdb.delete("TMS-temp").then((t) => { 
                      csdb.delete("msg-temp").then((t) => { 
                        csdb.delete("can-temp").then((t) => {
                          const Delete = new Discord.MessageEmbed()
                            .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
                            .setTitle('> ¡Temporizador Eliminado!')
                            .addField("\🛠️ Moderacion:", "> <@"+user.id+">, `"+user.id+"`")
                            .setColor("fa8787")
                            .setFooter("Slot Disponible!")
                            .setTimestamp()
                          m.delete()
                          message.channel.send({
                            content: null,
                            embed: Delete
                          })
                        })
                      })
                    })
                  });
                }else
                if(react.emoji.id == '932793223850647613'){
                  const Cancel = new Discord.MessageEmbed()
                    .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
                    .setTitle('> ¡Ya Hay un Temporizador!')
                    .addFields({
                      "name": "\📤 Canal de Envio",
                      "value": "<#"+can.id+">, `"+can.id+"`",
                      "inline": false
                    },{
                      "name": '\🕰️ Tiempo',
                      "value": '``` '+TMS+'```',
                      "inline": true
                    },{
                      "name": "\🔤 Contenido",
                      "value": "``` "+msg+" ```",
                      "inline": true
                    })
                    .setColor("fae587")
                    .setFooter("Solicitud")
                    .setTimestamp()
                  m.delete()
                  message.channel.send({
                    content: "```prolog\n     '  ¡¡El Temporizador Sigue en Curso!!  ' ```",
                    embed: Cancel
                  })
                }
              }else
              if(user.id !== message.author.id && !user.bot){
                react.users.remove(user.id);
              }
            })
          })
      })
    })
  })
  }else{
    let Tiempo  = args[1]
    let Formato = args[2]
    let MSG  = args.slice(3).join(" ")
    let canal= message.mentions.channels.first()

    !canal ? ((MSG = args.slice(2).join(" "))+( canal = message.channel)+(Tiempo = args[0])+ (Formato = args[1])) : ''

    if(!message.member.hasPermission("MANAGE_GUILD") && !message.member.roles.cache.has('951118997418553385') && message.author.id != '709393638396002325'){
      message.channel.send('¡No Puedes usar este Comando!').then(m => {
        setTimeout(function(){ m.channel.send('Usuarios Permitidos\n> `Gestionadores del Servidor`\n> `Staff` (<@&951118997418553385>)\n> `Astron` (<@709393638396002325>)') }, 1000)
      })
    }else
    
    if(!Tiempo){
      message.channel.send('¿Dentro de cuanto `Time` se enviara el Mensaje?')
    }else
    if(!Formato){
      message.channel.send('¿En que `Format` lo deseas enviar?')
    }else
    if(Formato != 'd' && Formato != 'h' && Formato != 'min'){
      message.channel.send('¡Formato Invalido!').then(m => {
        setTimeout(function(){ m.channel.send('> Ejemplo\n> `'+prefix+'temp 10 h Mensaje para enviar`') }, 1000)
      })
    }else
    if(!MSG){
      message.channel.send('¿Que mensaje envio?')
    }else
      
    if(!Number(Tiempo)){
      message.channel.send('¡Dato Erroneo!').then(m => {
        setTimeout(function(){ m.channel.send('> Ejemplo\n> `'+prefix+'temp 10 h Mensaje para enviar`') }, 1000)
      })
    
    }
    else{

      let MS = ms(`${Tiempo} ${Formato}`)
      let Dura = ms(MS, { long: true })
      
      const Awaiting = new Discord.MessageEmbed()
        .setAuthor(`Procesando…`, `https://i.ibb.co/d5VdmNs/discord-loading.gif`)
        .setColor("87CEFA")
      
      message.channel.send(Awaiting).then(m => {
        m.react("<:yes:885621446511063090>")
        m.react("<:no:885621446615908422>")
        m.react("<:cancel:885671180101648474>")
        m.awaitReactions((react, user) => {
          if(user.id === Bot.user.id && react.emoji.id === '885671180101648474'){
            m.edit({
              content: 'Seguro que vas a **Crear un Temporizador** para dentro de `'+ms(MS, { long: true })+'`, sera enviado en <#'+canal.id+'> con el mensaje: \n> ```'+MSG+'```\n_*reacciona_',
              embed: null
            })
          }
          if(user.id === message.author.id){
            if(react.emoji.id === '885621446511063090'){
              switch (Formato){
                case 'd':
                  TMS = new Date().getDay()
                  break;
                case 'h':
                  TMS = new Date().getHours()
                  break;
                case 'min':
                  TMS = new Date().getMinutes()
                  break;
              }
              let TEMP = ((TMS)+(Dura))
            csdb.set("temp", true).then((temp) => { 
              csdb.set("TMS-temp", TEMP).then((MS) => { console.log(MS)});
              csdb.set("msg-temp", MSG).then((MS) => { console.log(MS)});
              csdb.set("can-temp", canal).then((MS) => { console.log(MS)}); 
              const Edit = new Discord.MessageEmbed()
                .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
                .setTitle('> ¡Temporizador Creado!')
                .addFields({
                  "name": "\📤 Canal de Envio",
                  "value": "<#"+canal.id+">, `"+canal.id+"`",
                  "inline": false
                },{
                  "name": '\🕰️ Tiempo',
                  "value": '``` '+Dura+'```',
                  "inline": true
                },{
                  "name": "\🔤 Contenido",
                  "value": "``` "+MSG+" ```",
                  "inline": true
                })
                .setColor("87CEFA")
                .setFooter("Solicitud")
                .setTimestamp()
              m.delete();
              message.channel.send(Edit)
            console.log(temp) })
            }else
            
            if(react.emoji.id === '885621446615908422'){
              const Redo = new Discord.MessageEmbed()
                .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
                .setTitle('> ¡Temporizador Denegado!')
                .setDescription('Si aun deseas Crear un Temporizador ingresa denuevo los datos.')
                .setColor('fae587')
                .setFooter("Solicitud")
                .setTimestamp()
              m.delete()
              message.channel.send(Redo)
            }else

            if(react.emoji.id === '885671180101648474'){
              const Cancel = new Discord.MessageEmbed()
                .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
                .setTitle('> ¡Temporizador Cancelado!')
                .setDescription('Porfavor no Juegues con los Comandos, Mejor usa `-help [comando]`.')
                .setColor('fa8787')
                .setFooter("Solicitud")
                .setTimestamp()
              m.delete()
              message.channel.send(Cancel)
            }
          }else
          if(user.id !== message.author.id && !user.bot){
            react.users.remove(user.id);
          }
        })
      })
    }
  }
});
  }
}