const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão `Administrador` para executar esse comando!")
  let embedE = new Discord.MessageEmbed()
  .setAuthor(`${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  .setTitle("Escreva o Argumento Necessário!")
  .setColor("#FF0000")
  .setDescription(`Como configurar o **Welcome** da Isa?
\`'welcome canal <#mencione o canal aqui>\`
\`'welcome mensagem <mensagem quando o usuário entrar no servidor!\``)
  .setTimestamp()
  if (!args[0]) return message.reply(embedE)
  if (args[0] == "canal") {
    let vCanal = db.fetch(`canalW_${message.guild.id}`)
    let mCanal = message.mentions.channels.first()
    if (!mCanal) return message.reply("Você esqueceu de mencionar um canal!")
    db.set(`canalW_${message.guild.id}`, mCanal.id)
    db.add(`configCW_${message.guild.id}`, 1)
    let embed = new Discord.MessageEmbed()
    .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> ativou o módulo **Canal do Welcome** | Quando um usuário entrar, eu vou enviar a mensagem no ${mCanal}`)
    message.channel.send(embed)
  }
  if (args[0] == "mensagem") {
    let vMensagem = db.fetch(`mensagemW_${message.guild.id}`)
    let mMensagem = args.slice(1).join(" ")
    let placeholder = mMensagem.replace("{user}", `${message.author.tag}`).replace("{@user}", `<@${message.author.id}>`).replace("{guild}", `${message.guild.name}`).replace("{membros}", `${message.guild.memberCount}`)
    let embedE = new Discord.MessageEmbed()
    .setTitle("Defina a mensagem de Bem Vindo!")
    .setColor("#FF0000")
    .setDescription(`Defina a Mensagem de Bem Vindo!
**Parametros Disponíveis:**
{user} - Mostra o Usuário sem mencionar
{@user} - Mostra o Usuário mencionando
{guild} - O Nome do servidor
{membros} - O Total de Membros do Servidor!`)
    if (!args.slice(1).join(" ")) return message.reply(embedE)
    db.set(`mensagemW_${message.guild.id}`, args.slice(1).join(" "))
    let embed = new Discord.MessageEmbed()
    .setTitle(`Módulo ativado com sucesso por ${message.author.tag}`)
    .setColor("RANDOM")
    .setDescription(`<@${message.author.id}> ativou o módulo **Mensagem do Contador**`)
    .addFields(
    {name: "Mensagem adicionada", value: `\`${args.slice(1).join(" ")}\``},
      {name: "Como irá ficar", value: `\`${placeholder}\``},
      )
    message.channel.send(embed)
  }
  if (args[0] == "embed") {
    let vMensagem = db.fetch(`EmensagemW_${message.guild.id}`)
    let mMensagem = args.slice(1).join(" ")
  }
  db.add(`xp_${message.author.id}`, 1)
}
exports.help = {
  name: "!welcome"
}