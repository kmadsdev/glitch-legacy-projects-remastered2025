const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
    if (!args.join(" ")) return message.reply("Defina sua Mensagem para mostrar no `'userinfo`! (Máximo 100 Caracteres)")
    if (args.join(" ") > 100) return message.reply("No máximo 100 Caracteres!")
    db.set(`mensagem_${message.author.id}`, args.join(" "))
    let embed = new Discord.MessageEmbed()
    .setTitle("Sua Mensagem foi definida!")
    .setColor("RANDOM")
    .setDescription(`Sua Mensagem foi definida para \`${args.join(" ")}\``)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    message.channel.send(embed)
}
exports.help = {
    name: "!mensagem"
}