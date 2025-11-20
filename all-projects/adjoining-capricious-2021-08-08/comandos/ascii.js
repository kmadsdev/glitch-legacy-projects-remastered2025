const Discord = require("discord.js");
const figlet = require("figlet");
exports.run = async (bot, message, args) => {
  if (!args.join("")) return message.reply("Digite um argumento")
const bigtext = figlet.textSync(args.join(""), {
      font: 'Big',
      horizontalLayout: 'universal smushing',
      verticalLayout: 'universal smushing'
    })
message.channel.send(`\`\`\`${bigtext}\`\`\``)
}
exports.help = {
  name: "'ascii"
}