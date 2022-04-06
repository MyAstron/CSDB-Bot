module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    
    if(message.mentions.channels.first()){
      canal = message.mentions.channels.first()
        texto = args.slice(1).join(" ")
    }else
    if(message.mentions.users.first()){
      canal = message.mentions.users.first()
        texto = args.slice(1).join(" ")
    }else{
      canal = message.channel
        texto = args.join(" ")
    }


    try{
    canal.send(!texto ? 'Te falto el Texto!' : texto)
    !texto ? '' : message.delete()
    }catch(e){
      console.log(e)
    }
  }
}