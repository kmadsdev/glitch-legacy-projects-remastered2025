const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  let embed = new Discord.MessageEmbed()

    .setTitle(`Central de Ajuda | ${bot.user.username}`)
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
    .setColor("0EFE1D")
    .setDescription(`Hi ${message.author.username}! My commands are:


*language
*category
*premium
*Dtoken
*botinfo


Informations:
Tokens: 0
Premium: None
[Add Me](https://discord.com/oauth2/authorize?client_id=817408987426455592&scope=bot%20applications.commands&permissions=2147483647)・[Support Server](https://discord.gg/2n3dRuA2Sa)]`)
.setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")

      message.edit(embed)    
}
exports.help = {
  name: "*ajuda"
};
