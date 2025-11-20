const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
    if (!args.join(" ")) return message.reply("Message to show on `!userinfo`! (40 characters limit)")
    if (args.join(" ") > 40) return message.reply(":x: | 40 characters only")
    db.set(`mensagem_${message.author.id}`, args.join(" "))
    let embed = new Discord.MessageEmbed()
    .setTitle("Sua Mensagem foi definida!")
    .setColor("RANDOM")
    .setDescription(`Your message is now: \`${args.join(" ")}\``)
    .setTimestamp()
    .setFooter(``)
    message.channel.send(embed)
}
exports.help = {
    name: "!message"
};