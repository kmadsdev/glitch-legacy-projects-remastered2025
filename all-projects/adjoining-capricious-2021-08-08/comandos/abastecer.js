const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`frentista_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não trabalha aqui, para mais informações, consulte `'empregos`")
    let ganhar = await db.fetch(`abastecer_${message.author.id}`)
    let timeout = 7200000
    if (ganhar !== null & timeout -(Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar))
        message.reply(`Aguarde **${time.hours}h ${time.minutes}m e ${time.seconds}s** para executar esse comando novamente!`)
    } else {
        db.add(`cartão_${message.author.id}`, 200)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou com frentista e ganhou **R$ 200**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "'abastecer"
}