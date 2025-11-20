const Discord = require("discord.js");
const db = require("quick.db")
const ms = require("parse-ms");
exports.run = async (bot, message, args) => {
    let emprego = db.fetch(`moto-taxi_${message.author.id}`)
    if (emprego < 1) return message.reply("Você não está contratado nesse emprego, use `'empregos` para e saiba mais")
    let ganhar = await db.fetch(`dirigir_${message.author.id}`)
    let timeout = 6300000
    if (ganhar !== null & timeout - (Date.now() - ganhar) > 0) {
        let time = ms(timeout - (Date.now() - ganhar))
        message.reply(`Para usar os comandos novamente, espere **${time.hours}h ${time.minutes}m e ${time.seconds}s!**`)
    } else {
        db.add(`cartão_${message.author.id}`, 150)
        let embed = new Discord.MessageEmbed()
        .setTitle("Sucesso")
        .setColor("RANDOM")
        .setDescription(`${message.author} trabalhou como moto-táxi e recebeu **F$ 150**`)
        .setTimestamp()
        message.channel.send(embed)
    }
}
exports.help = {
    name: "!dirigir"
}