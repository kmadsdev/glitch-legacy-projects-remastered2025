const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
    if (!message.mentions.users.size) {
      let embed = new Discord.MessageEmbed()
      .setTitle("Seu Avatar!")
      .setDescription(`Para baixar esta imagem [Clique Aqui](${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})`)
      .setColor("RANDOM")
      .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
      message.channel.send(embed)
    }
    const avatarList = message.mentions.users.map(user => {
      let embed = new Discord.MessageEmbed()
      .setTitle(`Avatar de ${user.username}`)
      .setDescription(`Para baixar esta imagem [Clique Aqui](${user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})})`)
      .setColor("RANDOM")
      .setImage(user.displayAvatarURL({dynamic: true, size: 1024, format: "png"}))
      return message.channel.send(embed)
    })
    }
exports.help = {
  name: ".avatar"
}