const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) =>  {

    if(!args) { return message.reply(":x: | What will I say?") }  

  
    message.channel.send(`${args.join(" ")}`)

    db.add(`xp_${message.author.id}`, 1 `xp_${message.author.id}`, 2)
  
}

exports.help = {
  name: "!say"
};
