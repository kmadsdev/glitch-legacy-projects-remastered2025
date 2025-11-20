const Discord = require("discord.js");
const cpuStat = require("cpu-stat");
const os = require("os");
exports.run = async (bot, message, args) => {
cpuStat.usagePercent(function(err, percent, seconds) {
              if (err) {
                return console.log(err);
              }
                

  let embed = new Discord.MessageEmbed()
  .setTitle("Máquina da Isabela")
  .addField("**CPU**", `\`${os.cpus().map(i => `${i.model}`)[0]}\``)
  .addField("**USO DE CPU**", `\`${percent.toFixed(2)}%\``)
  .addField("Memória RAM Utilizada / Memórira RAM Total", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}\` / \`${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``)
  .setColor('RANDOM')
  
  message.channel.send(embed)
      })
}
exports.help = {
    name: "!cpu"
}