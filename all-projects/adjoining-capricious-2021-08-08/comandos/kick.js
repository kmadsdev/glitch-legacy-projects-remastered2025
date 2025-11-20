const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply(":x: | Você precisa da permissão `Expulsar Membros` para executar esse comando!");
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply(":x: | Eu preciso da permissão `Expulsar Membros` para executar esse comando!");
    const user = message.mentions.users.first();
    if (user.id === "694975753418440844") return message.reply(":x: | Você não pode me expulsar!");
    if (user.id === message.author.id) return message.reply(":x: | Você quer se expulsar? Como isso vai funcionar?")
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .kick
        .then(() => {
          message.reply(`:white_check_mark: | O usuário ${user.tag} foi **EXPULSO** com sucesso!`)
          db.add(`xp_${message.author.id}`, 1)
        })
        .catch(err => {
          message.reply(`:x: | Perdão, mas eu não consegui expulsar esse usuário, erro: \`${err}\``)
          console.log(err);
        });
      } else {
        message.reply(":x: | Este usuário não está nesse servidor!")
      }
    } else {
      message.reply(":x: | Você precisa mencionar um usuário para expulsar!")
    }
}
exports.help = {
  name: "'kick"
}