const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
 message.delete()
  if (!message.member.hasPermission("ADMINISTRADOR")) return message.reply(":x: | Você precisa da permissão `Administrador` para executar esse comando!")
  if (!args.join(" ")) return message.reply(":x: | Informe o link do vídeo!")

  let embedP = new Discord.MessageEmbed()
    .setTitle(`Anunciar um novo vídeo`)
    .setColor("RED")
    .setDescription(`Confirmar envio de Vídeo

O link do vídeo será ${args.slice(0).join(" ")}

🟢 Confirmar
🔴 Cancelar`)
message.react("🟢");
message.react("🔴");
      message.edit(embedP)

    let filtro1 = (r, u) => r.emoji.name === "🔴" && u.id === message.author.id;
    let coletor1 = message.createReactionCollector(filtro1);
    let filtro2 = (r, u) => r.emoji.name === "🟢" && u.id === message.author.id;
    let coletor2 = message.createReactionCollector(filtro2);

    coletor1.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Cancelado!")
      .setColor("WRITE")
      .setDescription(`Envio cancelado`)
      message.edit(embed)
      r.users.remove(message.author)
    })

    coletor2.on("collect", async (r) => {
const channel = bot.channels.cache.get('877928049742577684')
      channel.send(`||                                                @everyone                                                ||
<:discordserver_verificado:852936727067754513> **Vídeo novo do FIRE BOY GAMEPLAYS! Vai lá assitir OwO**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
<:seta:834278287323955260> ${args.slice(0).join(" ")}`)
      message.edit()
      r.users.remove(message.author)
    })

exports.help = {
  name: "!yt"
};