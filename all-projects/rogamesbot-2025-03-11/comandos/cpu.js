const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
                

  let embed = new Discord.MessageEmbed()
  .setTitle("About bot")
  .addField("**CPU**", `\`${os.cpus().map(i => `${i.model}`)[0]}\``)
  .addField("**CPU USED**", `\`${percent.toFixed(2)}%\``)
  .addField("MEMORY RAM USED / MEMORY RAM TOTAL", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``)
  .setColor('RANDOM')
  
  message.channel.send(embed)
      })
}
exports.help = {
    name: "!cpu"
};
