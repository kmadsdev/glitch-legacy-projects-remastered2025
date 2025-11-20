const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  let user = message.mentions.users.first() || message.author;
    let premium = db.fetch(`classic_${user.id}`)
    let gold = db.fetch(`gold_${user.id}`)
    let diamond = db.fetch(`diamond_${user.id}`)
    message.reply(`${premium} | ${gold} | ${diamond}`)
}
exports.help = {
  name: "i!p"
}