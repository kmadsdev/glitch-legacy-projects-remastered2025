const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`fazendeiro_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `'empregos` e saiba maís")
    let ganhar = await db.fetch(`plantar_${message.author.id}`)
    let timeout = 9000000
    if (ganhar !== null & timeout - (Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar));
        message.reply(`Para executar esse comando, espere **${time.hours}h ${time.minutes}m ${time.seconds}s!**`)
    } else {
        db.add(`cartão_${message.author.id}`, 300)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso!")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como fazendeiro e ganhou **F$ 300**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "'plantar"
}