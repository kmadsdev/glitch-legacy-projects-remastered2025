const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
     let embed = new Discord.MessageEmbed()
    .setTitle("Mais Sobre Mim =)")
    .setColor("RANDOM")
    .setDescription(`
Meu nome: **Banco**

Meu criador: **FIRE BOY#5649**

Depedência Principal: [Discord.js](https://discord.js.org/)

Linguagem: [JavaScript](https://js.org/)

Site Oficial: [Clique em Mim!](https://fireboywork.ml/)

Versão do Bot: **1.0.5:8**

Versão da FBS Bot: **2.0.0:18 PREMIUM**

Data de Nascimento: **06/07/2021**`)
    .setTimestamp() // {message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    message.channel.send(embed)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!sobremim"
}