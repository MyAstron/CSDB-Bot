const express = require('express')
const app = express()

app.get('/', function(req, res) {
  res.send('Hola mundo '+req)
})
let port = process.env.PORT || 3000;
app.listen(port)

require('dotenv').config()

/////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const Discord  = require("discord.js")
const { Util } = require("discord.js")
const Bot      = new Discord.Client()

Bot.on("ready", () => {
const Database = require("@replit/database")
const csdb = new Database()
  
  let prefijo = process.env['prefix']
  Bot.user.setPresence({
    status: "dnd",
    activity: {
      name: " "+prefijo+"help",
      type: "LISTENING",
      url: "https://www.twitch.tv/myastron"
    }
  })
  console.log("I'm Ready BB. By")
  csdb.get("temp").then(t => {
    csdb.get("use").then(u => {
      if(u != 'hours'){
        csdb.get("TMS-temp").then(t => {
          //if()
        })
      }
    })
    console.log(t)
  })
  console.log(
    new Date().getHours()
  )
  console.log(new Date().getDay()+" : "+new Date().getMonth()+" \n> "+new Date())
  
})

Bot.on("message", async(message) => {
  if(message.author.bot)return;
  let prefix = process.env['prefix']
  let args   = message.content.slice(prefix.length).trim().split(/ +/g)
  let cmd    = args.shift().toLowerCase()

  /*let song = ["si", "no", "tal vez", "no se", "probablemente", "claro", "en efecto", "por que?", "nunca", "tambien", "tampoco", "donde?", "cuando?", "desde luego", "por su puesto", ""]
  if(song.some(s => cmd === s)){    

    if(!message.attachments.first()){
      message.channel.send("> * Turu turu tu ru ru ruuuu *").then(m => {
        let react = ["🎶", "🎵", "🎧", "🎤", "<a:gg:932793215046811709>", "<a:dance:932793217706000465>", "<a:sing:932793217789874227>"];
        m.react(react[Math.floor(Math.random()*react.length)])
        message.delete()
      })
    }
  }*/
  if(message.channel.id == "949348806355468369"){
    const translate = require('node-google-translate-skidz');
    const Chatbot  =  require("discord-chatbot");
    let ChatArgs = message.content.slice("".length).trim().split(/ +/g).join(" ")
      
    const chatbot  =  new  Chatbot({name: "CSDB", gender: "Male"});

    let que = ["que", "Que", "Qe", "qe", "Q", "q", "ke", "Ke"]
    if(message.content.startsWith(prefix)){
      message.channel.startTyping()
        message.channel.send("¡Aqui no funcionan los comandos!")
      message.channel.stopTyping()
    }else
    if(que.some(q => ChatArgs == q)){
      message.channel.startTyping()
        message.channel.send("so")
      message.channel.stopTyping()
    }else{
      message.channel.startTyping()
      translate({
        text: ChatArgs,
        source: 'es',
        target: 'en'
      }, function(result) {
        chatbot.chat(result.translation).then(response=> {
          translate({
            text: response,
            source: 'en',
            target: 'es'
          }, function(result) {
              console.log(result)
            message.channel.send(result.translation)
            message.channel.stopTyping()
          })
        }).catch(e => console.log(e))
      })
    }
      
  }else{
    if(!message.content.startsWith(prefix))return;
      const file = require("./comandos/"+cmd)
    try{
      file.run(Discord, Util, Bot, prefix, args, cmd, message)
    }catch(e){
      console.log(e)
    }
  }

})

Bot.on("guildMemberAdd", async(member) => {
  if(member.user.bot)return member.roles.add("950784582024835102");
  const Hi = new Discord.MessageEmbed()
    .setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
    .setColor("87CEFA")
    .setTitle("> Que bien que te Uniste a `"+member.guild.name+"` <a:awesome:894641678797897749>")
    .setDescription("El canal de Reglas: <#950794669376274472>")
  if(member.guild.id === '948959154503036978'){
    Bot.channels.cache.get("949348806355468369").send(member.user.tag+" se Unio Banda!!")
    member.roles.add("950784982861873202")
    member.send(Hi)
  }
})

Bot.login(process.env['token'])
