const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
  let embed = new Discord.MessageEmbed()
    .setTitle("**Central de Ajuda**")
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
    .setColor("RED")
    .setDescription(`
**Member Commands**
> !bug <bug>
> !cpu 
> !message <message>
> !ontime
> !ping
> !say <massage>
> !servericon
> !serverinfo
> !status
> !userinfo

**Moderator Commands**
> !ban <@user>
> !kick <@user>
> !sm <time>

**Developer Commands**
> !eval`)
       .setTimestamp()
      .setFooter()
      message.reply(embed)
}

exports.help = {
  name: "!help"
};
    


