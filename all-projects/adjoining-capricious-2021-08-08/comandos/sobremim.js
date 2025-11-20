const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) => {
     let embed = new Discord.MessageEmbed()
    .setTitle("Meu Status =)")
    .setColor("RANDOM")
    .setDescription(`Olá! Meu nome é **Isabela** pros amigos mais próximos, meu nome é **isa**!
Aqui vai algumas informações sobre mim!
Meu nome: **Isabela**

Minha Idade: **16**

Meu criador: **<renatin/>#9218**

Depedência Principal: [Discord.js](https://discord.js.org/#/)

Linguagem: [JavaScript](https://www.javascript.com/)

Banco de Dados: [Quick.DB(em breve MongoDB)](https://quickdb.js.org/)

Site Oficial: [Clique aqui para ir ao site oficial](https://isabelabot.blogspot.com/)

Versão do Discord.js: **12.2.0**

Versão da Isabela: **1.6 BETA**

Data de Nascimento: **01/04/2004**

Dia e horário que a bot foi criada: **01/04/2020 às 18:21:35**`)
    .setTimestamp() // {message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"}
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
    message.channel.send(embed)
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "'sobremim"
}