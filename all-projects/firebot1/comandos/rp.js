const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  if (message.author.id === "394076891801190410") {
      let user = message.mentions.users.first()
      if (!user) return message.reply("Quem deverá perder o Premium?")
      db.subtract(`premium_${user.id}`, 2)
      message.reply(`${user} agora não é mais premium!`)
    }
}
exports.help = {
  name: "!rp"
}