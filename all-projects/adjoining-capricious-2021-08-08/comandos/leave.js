const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão `Administrador` para executar esse comando!")
  let embedE = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  .setTitle("Escreva o argumento necessário!")
  .setColor("#FF0000")
  .setDescription(`Como configurar a **Saída** da Isa?
\`'leave canal <#mencione o canal aqui>>\`
\`'leave mensagem <mensagem quando o usuário sair do servidor>\``)
  .setTimestamp()
  if (!args[0]) return message.reply(embedE)
  if (args[0] == "canal") {
    db.add(`xp_${message.author.id}`, 1)
    let vCanal = db.fetch(`canalL_${message.guild.id}`)
    let mCanal = message.mentions.channels.first()
    if (!mCanal) return message.reply("Você esqueceu de mencionar um canal!")
    db.set(`canalL_${message.guild.id}`, mCanal.id)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> ativou o módulo **Canal de Saída** | Quando um usuário sair do servidor, eu vou enviar uma mensagem no ${mCanal}`)
    message.channel.send(embed)
  }
  if (args[0] == "mensagem") {
    db.add(`xp_${message.author.id}`, 1)
    let vMensagem = db.fetch(`mensagemL_${message.guild.id}`)
    let simulação = args.slice(1).join(" ")
    let placegolder = simulação.replace("{user}", `${message.autor.tag}`).replace("{guild}", `${message.guild.name}`).replace("{membros}", `${message.guild.memberCount}`)
    let embedE = new Discord.MessageEmbed()
    .setTitle("Defina a Mensagem de Saída!")
    .setColor("RANDOM")
    .setDescription(`Defina a Mensagem de Saída!
**Parametros Disponíveis:**
{user} - Mostra o usuário, sem mencionar!
{guild} - O Nome do servidor
{membros} - O Total de Membros do Servidor!`)
    if (!args.slice(1).join(" ")) return message.reply(embedE)
    db.set(`mensagemL_${message.guild.id}`, args.slice(1).join(" "))
    let embed = new Discord.MessageEmbed()
    .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> ativou o módulo **Mensagem do Contador**`)
    .addFields(
    {name: "Mensagem adicionada", value: `\`${args.slice(1).join(" ")}\``},
      {name: "Como irá ficar", value: `\`${placegolder}\``},
      )
    message.channel.send(embed)
  }
}
exports.help = {
  name: "'leave"
}