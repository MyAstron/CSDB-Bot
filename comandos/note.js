module.exports = {
  run: async (Discord, Util, Bot, prefix, args, cmd, message) => {
    const note = require("./notes.js")
      note.run(Discord, Util, Bot, prefix, args, cmd, message)
  }
}