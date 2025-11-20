const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  let permissão = message.author.id == "763398072587386912"
     if (!permissão) return message.reply("Esse comando só pode ser utilizado por pessoas autorizadas!")
     if (permissão) {
    if (!args[0]) return message.reply("Você não informou nenhum argumento!")
    if (isNaN(args[0])) return message.reply('O Argumento informado não é um número!')
    
    let user = message.mentions.users.first() || message.author;
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Adição de Saldo!")
    .setAuthor(`${user.username} Ganhou Saldo!`, `${user.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`) // ${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> deu F$${args[0]} para ${user} !`)
    .setTimestamp()
    message.channel.send(embed)
     db.add(`money_${user.id}`, args[0])
     }
}
exports.help = {
  name: "'give"
}