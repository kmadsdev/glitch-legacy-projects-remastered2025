const Discord = require("discord.js");
const db = require("quick.db")
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`barman_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `'emprego`e saíba mais")
    let ganhar = await db.fetch(`vender_${message.author.id}`)
    let tempo = 14400000
    if (ganhar !== null & tempo - (Date.now() - ganhar) > 0) {
        let time = ms(tempo - (Date.now() - ganhar));
        message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar o comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 600)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como barman e ganhou **F$ 600**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!vender"
}