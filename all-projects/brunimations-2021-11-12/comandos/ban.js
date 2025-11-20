const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
         if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(":x: | Você precisa da permissão `Banir Membros` para executar esse comando!");
    let motivo = args.slice(1).join(" ") || "Nenhum Motivo Informado"
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(":x: | Eu preciso da permissão `Banir Membros` para executar esse comando!")
    const user = message.mentions.users.first();
    if (!user) return message.reply(":x: | Mencione um usuário para eu banir!")
    if (user.id === "694975753418440844") return message.reply(":x: | Você não pode me banir!");
    if (user.id === "811227262912299028") return message.reply(":x: | Você não pode banir meu desenvolvedor!");
    if (user.id === message.author.id) return message.reply(":x: | Você quer se banir? Como isso vai funcionar?")
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
        .ban({
          reason: `Banido por ${message.author.tag} - Motivo: ${motivo}`
        })
        .then(() => {
          message.reply(`:white_check_mark: | O usuário ${user.tag} foi **Banido** com sucesso!`);
          db.add(`xp_${message.author.id}`, 1)
        })
        .catch(err => {
          message.reply(`:x: | Não consegui banir esse usuário, erro: \`*${err}*\``);
          console.log(err);
        });
      } else {
        message.reply(":x: | Este usuário não está no servidor!");
      }
    } else {
      message.reply(":x: | Vou banir quem?");
    }
}
exports.help = {
  name: ".ban"
}
