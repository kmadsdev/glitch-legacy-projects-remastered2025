const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você precisa da permissão `Administrador` para executar esse comando!")
  let canalW = db.fetch(`canalW_${message.guild.id}`)
  let mensagemW = db.fetch(`mensagemW_${message.guild.id}`)
  let canalL = db.fetch(`canalL_${message.guild.id}`)
  let mensagemL = db.fetch(`mensagemL_${message.guild.id}`)
  let canalC = db.fetch(`cCanal_${message.guild.id}`)
  let mensagemC = db.fetch(`cMensagem_${message.guild.id}`)
  let cargo = db.fetch(`cargo_${message.guild.id}`)
  if (canalW === null) canalW = "Não Ativado"
  if (mensagemW === null) mensagemW = "Não Ativado"
  if (canalL === null) canalL = "Não Ativado"
  if (mensagemL === null) mensagemL = "Não Ativado"
  if (cargo === null) cargo = "Não Ativado"
  if (canalC === null) canalC = "Não Ativado"
  if (mensagemC === null) mensagemC = "Não Ativado"
  db.add(`xp_${message.author.id}`, 1)
  let embedP = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setDescription(`Olá <@${message.author.id}>!
Você está no painel de configuração da Isabela, o que você quer desativar?
:one: - Canal de Welcome (atualmente como <#${canalW}>)

:two: - Mensagem de Bem Vindo (atualmente a mensagem é:
\`${mensagemW}\`)

:three: - Canal de Saída(atualmente como <#${canalL}>)

:four: - Mensagem de Saída(atualmente a mensagem é:
\`${mensagemL}\`)

:five: - AutoRole(atualmente o cargo é: <@&${cargo}>)


*Reaga abaixo descrito acima, o que você quer desativar!*`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embedP).then(msg => {
    msg.react("1️⃣")
    msg.react("2️⃣")
    msg.react("3️⃣")
    msg.react("4️⃣")
    msg.react("5️⃣")
    let filtro1 = (r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1, {max: 1})
    let filtro2 = (r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id;
    let coletor2 = msg.createReactionCollector(filtro2, {max: 1})
    let filtro3 = (r, u) => r.emoji.name === "3️⃣" && u.id === message.author.id;
    let coletor3 = msg.createReactionCollector(filtro3, {max: 1})
    let filtro4 = (r, u) => r.emoji.name === "4️⃣" && u.id === message.author.id;
    let coletor4 = msg.createReactionCollector(filtro4, {max: 1})
    let filtro5 = (r, u) => r.emoji.name === "5️⃣" && u.id === message.author.id;
    let coletor5 = msg.createReactionCollector(filtro5, {max: 1})
    coletor1.on("collect", () => {
      if (canalW === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`canalW_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescription(`O Módulo **Canal de Bem Vindo** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use i!welcome canal <#mencione o canal>`)
      msg.edit(embed)
    })
    coletor2.on("collect", () => {
      if (mensagemW === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`mensagemW_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescription(`O Módulo **Mensagem de Bem Vindo** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use 'welcome mensagem <mensagem>`)
      msg.edit(embed)
    })
    coletor3.on("collect", () => {
      if (canalL === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`canalL_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescription(`O Módulo **Canal de Saída** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use 'leave canal <#mencione o canal>`)
      msg.edit(embed)
    })
    coletor4.on("collect", () => {
      if (mensagemL === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`mensagemL_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescriptin(`O Módulo **Mensagem de Saída** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use 'leave mensagem <mensagem>`)
      msg.edit(embed)
    })
    coletor5.on("collect", () => {
      if (cargo === null) return message.reply("Esse módulo não está ativado!")
      db.delete(`cargo_${message.guild.id}`)
      let embed = new Discord.MessageEmbed()
      .setTitle("Desativado!")
      .setColor("RANDOM")
      .setDescription(`O Módulo **AutoRole** foi desativado!`)
      .setTimestamp()
      .setFooter(`${message.author.tag}, para ativar novamente, use 'setautorole <@cargo>`)
      msg.edit(embed)
    })
  })
}
exports.help = {
  name: "'desativar"
}