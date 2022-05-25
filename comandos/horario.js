module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    
    if(message.mentions.channels.first()){
      canal = message.mentions.channels.first()
      dia = args[1]
    }else
    if(message.mentions.users.first()){
      canal = message.mentions.users.first()
      dia = args[1]
    }else{
      canal = message.channel
      dia = args[0]
    }
    
  let clase = {
    "1": "Programacion        ",
    "2": "Biologia            ",
    "3": "Matematica          ",
    "4": "Ingles              ",
    "5": "Literatura          ",
    "6": "Artes Plasticas     ",
    "7": "Guia                ",
    "8": "Quimica             ",
    "9": "CISCO               ",
    "10": "Contabilidad        ",
    "11": "Sociales            ",
    "12": "Anroid Studios      ",
    "13": "Fisica Fundamental  ",
    "14": "Deporte             ",
    "15": "Religion            ",
    "16": "Filosofia           ",
    
    "17": "Recreo              ",
    "18": "Buenos Dias         ",
    "19": "Lectura             ",
    "20": "                    ",
    "21": "――――――――――――――――――――",
    "22": "      'Materia'       ",
    "23": "Eucaristia          ",
    "24": " ----------------   "
  }

    let ReuID = '982 1382 1625' 
    let Pasword = 'IVcFEB'
    let Link = 'https://donboscogt.zoom.us/j/98213821625'
    let IMG = "https://i.ibb.co/CWPzLcs/Horario.png"
    const Fecha = new Date()
    let Dias = {
      "1": "Lunes",
      "2": "Martes",
      "3": "Miercoles",
      "4": "Jueves",
      "5": "Viernes"
    }
    let Lunes = {
      "13": "Buenos Dias         (07:00 - 07:15)\nLectura             (07:15 - 07:40)",
      "14": "Programacion        (08:00 - 08:40)\n                    (08:50 - 09:30)",
      "15": "Programacion        (08:50 - 09:30)\nRecreo              (20 min)\nBiologia            (09:50 - 10:30)",
      "16": "Biologia            (09:50 - 10:30)\nMatematica          (10:40 - 11:20)",
      "17": "Matematica          (10:40 - 11:20)\nRecreo              (20 min)\nIngles              (11:40 - 12:20)",
      "18": "Ingles              (11:40 - 12:20)\n--------------      (12:20 - 13:10)",
      "19": "--------------      (12:20 - 13:10)"
    }
    let Martes = {
      "13": "Buenos Dias         (07:00 - 07:15)\nLectura             (07:15 - 07:40)",
      "14": "Literatura          (08:00 - 08:40)\nArtes Plasticas     (08:50 - 09:30)",
      "15": "Artes Plasticas     (08:50 - 09:30)\nRecreo              (20 min)\nMatematica          (09:50 - 10:30)",
      "16": "Matematica          (09:50 - 10:30)\nGuia                (10:40 - 11:20)",
      "17": "Guia                (10:40 - 11:20)\nRecreo              (20 min)\nIngles              (11:40 - 12:20)",
      "18": "Ingles              (11:40 - 12:20)\n--------------      (12:20 - 13:10)",
      "19": "--------------      (12:20 - 13:10)"
    }
    let Miercoles = {
      "13": "Buenos Dias         (07:00 - 07:15)\nLectura             (07:15 - 07:40)",
      "14": "Quimica             (08:00 - 08:40)\nCISCO               (08:50 - 09:30)",
      "15": "CISCO               (08:50 - 09:30)\nRecreo              (20 min)\nContabilidad        (09:50 - 10:30)",
      "16": "Contabilidad        (09:50 - 10:30)\nSociales            (10:40 - 11:20)",
      "17": "Sociales            (10:40 - 11:20)\nRecreo              (20 min)\nComputacion         (11:40 - 12:20)",
      "18": "Computacion         (11:40 - 12:20)\n--------------      (12:20 - 13:10)",
      "19": "--------------      (12:20 - 13:10)"
    }
    let Jueves = {
      "13": "Eucaristia          (07:00 - 07:15)\n                    (07:15 - 07:40)",
      "14": "Fisica Funamental   (08:00 - 08:40)\nLiteratura          (08:50 - 09:30)",
      "15": "Literatura          (08:50 - 09:30)\nRecreo              (20 min)\nMatematica          (09:50 - 10:30)",
      "16": "Matematica          (09:50 - 10:30)\nComputacion         (10:40 - 11:20)",
      "17": "Computacion         (10:40 - 11:20)\nRecreo              (20 min)\nIngles              (11:40 - 12:20)",
      "18": "Ingles              (11:40 - 12:20)\nDeportes            (12:20 - 13:10)",
      "19": "Deportes            (12:20 - 13:10)"
    }
    let Viernes = {
      "13": "Buenos Dias         (07:00 - 07:15)\nLectura             (07:15 - 07:40)",
      "14": "Fisica funamental   (08:00 - 08:40)\nReligion            (08:50 - 09:30)",
      "15": "Religion            (08:50 - 09:30)\nRecreo              (20 min)\nQuimica             (09:50 - 10:30)",
      "16": "Quimica             (09:50 - 10:30)\nBiologia            (10:40 - 11:20)",
      "17": "Biologia            (10:40 - 11:20)\nRecreo              (20 min)\nIngles              (11:40 - 12:20)",
      "18": "Filosofia           (11:40 - 12:20)\n--------------      (12:20 - 13:10)",
      "19": "--------------      (12:20 - 13:10)"
    }

    if(dia){
      const horario = require("./horarios/depende.js")
      horario.use(Discord, Util, Bot, prefix, args, cmd, message, canal, ReuID, Pasword, Link, IMG, Fecha, Dias, Lunes, Martes, Miercoles, Jueves, Viernes, dia, clase)
    }else{
      const horario = require("./horarios/normal.js")
      horario.use(Discord, Util, Bot, prefix, args, cmd, message, canal, ReuID, Pasword, Link, IMG, Fecha, Dias, Lunes, Martes, Miercoles, Jueves, Viernes, dia, clase)
    }
    
  }
}