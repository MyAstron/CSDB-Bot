module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    if(message.mentions.users.first()){
      user = message.mentions.users.first()
    }else{
      user = message.member
    }

    let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let abcs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-", "."]
    let ABCs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", "."]
    
    let marcas = ["`Telgua`", "`Claro`", "`Tigo`", "`Discord`", "`Movistar`", "<a:error:960572498200657930>"]
    let sistemas = ["`Window's`", "`Window's`", "`Window's`", "`iOS`", "`Linux`", "<a:error:960572498200657930>"]
    let navegador = ["`Opera GX`", "`Firefox`", "`Google Chrome`", "`Google Chrome`", "`Google Chrome`", "`Google Chrome`", "<a:error:960572498200657930>"]

    let apodo = ["pin", "leiva", "frijol", "guayo", "secre", "sic", "nico"]
    let extencion = [".com", ".gt", ".site", ".dev", ".gg", ".tv", ".zyx", ".sex", ".pepe"]
    let mails = ["google.com", "discord.com", "donbosco.edu.gt", "csdb.gt", "myselft.com", "astron.dev", `${apodo[Math.floor(Math.random()*(apodo.length))]}${extencion[Math.floor(Math.random()*(extencion.length))]}`]
    let correo = "@"+mails[Math.floor(Math.random()*(mails.length))]
    

    let RanX = [
      nums[Math.floor(Math.random()*(nums.length))],
      abcs[Math.floor(Math.random()*(abcs.length))],
      ABCs[Math.floor(Math.random()*(ABCs.length))],
      nums[Math.floor(Math.random()*(nums.length))],
      abcs[Math.floor(Math.random()*(abcs.length))],
      ABCs[Math.floor(Math.random()*(ABCs.length))],
      nums[Math.floor(Math.random()*(nums.length))],
      abcs[Math.floor(Math.random()*(abcs.length))],
      ABCs[Math.floor(Math.random()*(ABCs.length))],
      nums[Math.floor(Math.random()*(nums.length))],
      abcs[Math.floor(Math.random()*(abcs.length))],
      ABCs[Math.floor(Math.random()*(ABCs.length))],
      nums[Math.floor(Math.random()*(nums.length))],
      abcs[Math.floor(Math.random()*(abcs.length))],
      ABCs[Math.floor(Math.random()*(ABCs.length))],
      nums[Math.floor(Math.random()*(nums.length))],
      abcs[Math.floor(Math.random()*(abcs.length))],
      ABCs[Math.floor(Math.random()*(ABCs.length))]
    ]
    var nX = [nums[Math.floor(Math.random()*(nums.length))], ""]
    var lX = [abcs[Math.floor(Math.random()*(abcs.length))], ""]
    var AX = [ABCs[Math.floor(Math.random()*(ABCs.length))], ""]


    const Awaiting = new Discord.MessageEmbed()
      .setAuthor(`Hakeo en Proceso…`, `https://i.ibb.co/d5VdmNs/discord-loading.gif`)
      .setColor("87CEFA")
    const hack = new Discord.MessageEmbed()
      .setAuthor(message.member.user.tag, message.author.avatarURL({ dynamic: true }))
      .setColor("87CEFA")
      .setDescription("> Utiliza **"+sistemas[Math.floor(Math.random()*(sistemas.length))]+"** con **"+marcas[Math.floor(Math.random()*(marcas.length))]+"** en **"+navegador[Math.floor(Math.random()*(navegador.length))]+"**")
      .addFields({
        "name": "<:IP:960592528015519845> IP",
        "value": 
          `**\`${Math.floor(Math.random()*(nX.length))+Math.floor(Math.random()*(nums.length))+Math.floor(Math.random()*(nums.length))+Math.floor(Math.random()*(nums.length))+"."+Math.floor(Math.random()*(nums.length))+Math.floor(Math.random()*(nums.length))+Math.floor(Math.random()*(nums.length))+"."+Math.floor(Math.random()*(nums.length))+Math.floor(Math.random()*(nums.length))+Math.floor(Math.random()*(nums.length))+"."+Math.floor(Math.random()*(nums.length))+Math.floor(Math.random()*(nums.length))}\`**`,
        "inline": true
      },{
        "name": "<:email:960593582283173959> Correo",
        "value": 
          user.nickname ? 
          (`[**\`${user.nickname+correo}\`**](https://mailto:${correo})`) :
          (`[**\`${user.username+correo}\`**](https://mailto:${correo})`),
        "inline": true
      },{
        "name": "🔐 Contraseña",
        "value": 
          `**\`${RanX[Math.floor(Math.random()*(RanX.length))]+RanX[Math.floor(Math.random()*(RanX.length))]+lX[Math.floor(Math.random()*(lX.length))]+RanX[Math.floor(Math.random()*(RanX.length))]+AX[Math.floor(Math.random()*(AX.length))]+RanX[Math.floor(Math.random()*(RanX.length))]+RanX[Math.floor(Math.random()*(RanX.length))]+nX[Math.floor(Math.random()*(nX.length))]+lX[Math.floor(Math.random()*(lX.length))]+nX[Math.floor(Math.random()*(nX.length))]+RanX[Math.floor(Math.random()*(RanX.length))]}\`**`,
        "inline": true
      })


    if(!message.mentions.users.first()){
      message.channel.send("¡Menciona a un Usuario!")
    }else{
      if(user == message.author){
        message.reply("¡¿Quieres Exponer tus Datos?!")
      }else
      if(user.bot && message.author.id != "709393638396002325"){
        message.reply("¡Los Bot's estamos Protegidos!")
      }else{
        message.channel.send(Awaiting).then(m => {
          setTimeout(() =>{ 
            m.edit({
              content: "▀    Obteniendo su IP",
              embed: Awaiting.setAuthor("[▓░░░░░░░]")}) }, 1000);
          setTimeout(() =>{ 
            m.edit({
              content: "█    Obteniendo su Correo",
              embed: Awaiting.setAuthor("[▓▓░░░░░░]")}) }, 1800);
          setTimeout(() =>{ 
            m.edit({
              content: "█▄ Obteniendo su Contraseña",
              embed: Awaiting.setAuthor("[▓▓▓░░░░░]")}) }, 2500);
          setTimeout(() =>{ 
            m.edit({
              content: "██ Cargando Datos",
              embed: Awaiting.setAuthor("[▓▓▓▓░░░░]")}) }, 3300);
          setTimeout(() =>{ 
            m.edit({
              content: "▄█ Comprobando Datos",
              embed: Awaiting.setAuthor("[▓▓▓▓▓▓░░]")}) }, 4500);
          setTimeout(() =>{ 
            m.edit({
              content: "   █ Datos Verificados",
              embed: Awaiting.setAuthor("[▓▓▓▓▓▓▓░]")}) }, 4900);
          setTimeout(() =>{ 
            m.edit({
              content: "> ¡¿Listo para Copiar?!",
              embed: Awaiting.setAuthor("[▓▓▓▓▓▓▓▓]")}) }, 6900);
          setTimeout(() =>{ 
            m.edit(Awaiting.setAuthor("Hack Concluido...", "https://i.ibb.co/TM7FPdm/exclamatino.gif")) }, 7200);

          setTimeout(() =>{ m.edit({
                  content: "Copia **Rapido** Antes que se **Quite**!",
                  embed: hack
          }) }, 8500);
          setTimeout(() =>{ m.edit("> ¡Hack Terminado! :spy:") }, 15000);
        })
      }
    }
  }
}