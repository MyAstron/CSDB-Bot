/*module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    let objetos = [":bomb:", ":blue_square:", ":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:"];
    //const numRand = objetos[Math.floor(Math.random() * objetos.length)];
    let numeros = { ":bomb:": '*', ":blue_square:": 0, ":one:": 1, ":two:": 2, ":three:": 3, ":four:": 4, ":five:": 5, ":six:": 6, ":seven:": 7, ":eight:": 8,  ":nine:": 9 };
    let valor = { '*': '💥', 0: "🌟", 1: "🌟", 2: "🌟", 3: "🌟", 4: "🌟", 5: "🌟", 6: "🌟", 7: "🌟", 8: "🌟",  9: "🌟" };

    
    const buscaminas = new Array(2);
    for(let i = 0; i < 3; i++){
      buscaminas[i]=new Array(2);
    }
    for (let i = 0; i < 3; i++){
      for (let j = 0; j < 3; j++){
        buscaminas[i][j] = numeros[objetos[Math.floor(Math.random() * objetos.length)]];
      }
    }
    const Awaiting = new Discord.MessageEmbed()
      .setAuthor("Preparate para el Juego...", `${Config.load}`)
      .setColor("87CEFA")
    const Juego = new Discord.MessageEmbed()
      .setTitle(`> :one: :two: :three: \n> :four: :five: :six: \n> :seven: :eight: :nine:`).setColor("87CEFA")


    message.channel.send(Awaiting).then(m => {

      buscaminas[i][j] = mensaje[i][j].replace
      
      m.react('1⃣'); m.react('2⃣'); m.react('3⃣'); 
      m.react('4⃣'); m.react('5⃣'); m.react('6⃣'); 
      m.react('7⃣'); m.react('8⃣'); m.react('9⃣');
      m.awaitReactions((react, user) => {
        if(user.id === "891518744231305237"){
          if(react.emoji.name === '9⃣')return setTimeout(() =>{m.edit(Juego)}, 1500);
        }
        if(user.id === message.author.id){
          if(react.emoji.name == '1⃣'){
            if(buscaminas[0][0] != '*'){
                m.edit(
                  Juego.setTitle(`> ${buscaminas[0][0]} `)
                ); 
              
              react.users.remove(user.id); react.users.remove();
            }else{
              m.delete(); message.channel.send(UnoN);
            }
          }else

          if(react.emoji.name === '2⃣'){
            if(buscaminas[0][1] !== '*'){
              m.edit(DosS); react.users.remove(user.id); react.users.remove();
            }else{
              m.delete(); message.channel.send(DosN);
            }
          }else

          if(react.emoji.name === '3⃣'){
            if(buscaminas[0][2] !== '*'){
              m.edit(TresS); react.users.remove(user.id); react.users.remove();
            }else{
              m.delete(); message.channel.send(TresN);
            }
          }else

          if(react.emoji.name === '4⃣'){
            if(buscaminas[1][0] !== '*'){
              m.edit(CuatroS); react.users.remove(user.id); react.users.remove();
            }else{
              m.delete(); message.channel.send(CuatroN);
            }
          }else

          if(react.emoji.name === '5⃣'){
            if(buscaminas[1][1] !== '*'){
              m.edit(CincoS); react.users.remove(user.id); react.users.remove();
            }else{
              m.delete(); message.channel.send(CincoN);
            }
          }else

          if(react.emoji.name === '6⃣'){
            if(buscaminas[1][2] !== '*'){
              m.edit(SeisS); react.users.remove(user.id); react.users.remove();
            }else{
              m.delete(); message.channel.send(SeisN);
            }
          }else

          if(react.emoji.name === '7⃣'){
            if(buscaminas[2][0] !== '*'){
              m.edit(SieteS); react.users.remove(user.id); react.users.remove();
            }else{
              m.delete(); message.channel.send(SieteN);
            }
          }else

          if(react.emoji.name === '8⃣'){
            if(buscaminas[2][1] !== '*'){
              m.edit(OchoS); react.users.remove(user.id); react.users.remove();
            }else{
              m.delete(); message.channel.send(OchoN);
            }
          }else

          if(react.emoji.name === '9⃣'){
            if(buscaminas[2][2] !== '*'){
              m.edit(NueveS); react.users.remove(user.id); react.users.remove();
            }else{
              m.delete(); message.channel.send(NueveN);
            }
          }
        }
      })
    })
  }
}*/