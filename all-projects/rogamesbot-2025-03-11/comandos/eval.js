const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const figlet = require("figlet");
const cpuStat = require("cpu-stat");
const os = require("os");
const moment = require("moment");

exports.run = async (bot, message, args) => {
  let autorizado = message.author.id == "811227262912299028"
      if (!autorizado) return message.reply("Esse comando só é disponível para meus desenvolvedores!")
      if (autorizado) {
        try{
          if(!args.join(" ")) return message.reply("O meu dono, esqueceu de digitar um argumento!")
          let code = eval(args.join(" "));
          
          if (typeof code !== "string") code = require("util").inspect(code, { depth: 0 });
          let embed = new Discord.MessageEmbed()
          .setColor("RANDOM")
          .addField(":envelope_with_arrow: Entrada:", `\`\`\`js\n${args.join(" ")}\`\`\``)
          .addField(":triangular_flag_on_post: Saída", `\`\`\`js\n${code}\n\`\`\``)
          message.reply(embed)
        } catch(e) {
          message.reply(`\`\`\`js\n${e}\n\`\`\``);
        }
      }
}
exports.help = {
  name: "!eval"
};