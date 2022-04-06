module.exports = {
  descripcion: "``` Revisa la Informacion y Comandos!```",
  advertencia: '``` • Solo Funciona con Mis Comandos!```',
  ejemplo: '```help [comando]```',
  requisitos: "``` Usuario ⮞ Enviar Mensajes         \n Bot     ⮞ Enviar Mensajes```",
  extra: {
    name: "Ninguna!",
    value: ""
  },
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let helpCMD = args[0]
    if(helpCMD){
      try {
        let arch = require('./'+helpCMD)
        var des = arch.descripcion
        var adv = arch.advertencia
        var eje = arch.ejemplo
        var ext = arch.extra
        var req = arch.requisitos

        const Info = new Discord.MessageEmbed()
          .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
          .setDescription('> **¡Informacion de `'+helpCMD+'`!**')
          .addFields({
            "name": "\🌐 Descripcion",
            "value": des,
            "inline": false
          },{
            "name": '\💾 Ejemplo',
            "value": eje,
            "inline": false
          },{
            "name": '\🔬 Informacion Extra',
            "value": "> **"+ext.name+"**\n"+ext.value,
            "inline": true
          },{
            "name": '\⚙️ Requisitos',
            "value": req,
            "inline": true
          },{
            "name": "\⚠️ Advertencias",
            "value": adv,
            "inline": false
          })
          .setColor("87CEFA")
          .setFooter("Sintaxis: [Opcional], <Requerido>")
          .setTimestamp()
        message.channel.send(Info)
      }catch(e){
        message.channel.send('¡`'+helpCMD+'` No es uno de mis comandos!').then(m => {
        setTimeout(function(){ m.channel.send('> O puede ser que aun no esta Configurada su Informacion!') }, 1000)
        console.log(e)
      })
      }
    }
    else {

        const help = new Discord.MessageEmbed()
          .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
          .addField("\🔍 Mis Comandos", 
`\`\`\`ml
      'CSDB'
${prefix}horario [dia]

     'Extra'
${prefix}ip
${prefix}bot
${prefix}server
${prefix}user             (En Mantenimiento)
${prefix}ping
${prefix}help [comando]
${prefix}say <texto>
${prefix}hack <@user>
\`\`\``)
          .setColor("87CEFA")
          .setFooter("Sintaxis: [Opcional], <Requerido>")
          .setTimestamp()
        message.channel.send(help)
    }
  }
}