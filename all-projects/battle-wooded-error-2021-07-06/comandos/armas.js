const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
  let embedP = new Discord.MessageEmbed()
  .setTitle("Armas")
  .setColor("RANDOM")
  .setDescription(`Seja bem vindo ao paínel de armas, aqui você pode comprar quais armas você quiser, as armas servem para você poder assaltar empresas!
  
  Aperte ":one:" para ver toda a lista de armas
  Aperte ":two:" para ver os comandos que você pode usar com as armas!`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
  message.channel.send(embedP).then(msg => {
    msg.react("1️⃣");
    msg.react("2️⃣");
    msg.react("◀")
      let coletorOne = msg.createReactionCollector((r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id)
      let coletorTwo = msg.createReactionCollector((r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id)
      let coletorV = msg.createReactionCollector((r, u) => r.emoji.name === "◀" && u.id === message.author.id)
      coletorOne.on("collect", (r) => {
        r.users.remove(message.author)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lista de Armas")
        .setColor("RANDOM")
        .addFields(
          {name: "UZI", value: `Valor: **F$ 12,000**
          Munição: **F$ 1,200** por 50 Balas`},
          {name: "M1911", value: `Valor: **F$ 24,000**
          Munição: **F$ 2,400** por 50 Balas`},
          {name: "Remington 870", value: `Valor: **F$ 48,000**
          Munição: **F$ 4,800** por 50 Balas`},
          {name: "AK-47 (recomendada)", value: `Valor: **F$ 96,000**
          Munição: **F$ 9,600** por 50 Balas`},
          {name: "AR-15", value: `Valor: **F$ 150,000**
          Munição: **F$ 19,200** por 50 Balas`},
          {name: "FAL", value: `Valor: **F$ 200,000**
          Munição: **F$ 30,000** por 50 Balas`},
          {name: "PKM", value: `Valor: **F$ 210,000**
          Munição: **F$ 21,000** por 50 Balas`},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        msg.edit(embed)
      })
      coletorTwo.on("collect", (r) => {
        r.users.remove(message.author)
        let embed = new Discord.MessageEmbed()
        .setTitle("Lista de Armas | Comandos")
        .setColor("RANDOM")
        .addFields(
          {name: "UZI", value: `\`'roubar loja-de-cosmeticos\``},
          {name: "M1911", value: `\`'roubar restaurante\``},
          {name: "Remington 870", value: `\`'roubar streaming\``},
          {name: "AK-47", value: `\`'roubar material-de-construcao\``},
          {name: "AR-15", value: `\`'roubar laboratorio\``},
          {name: "FAL", value: `\`'roubar jogos\``},
          {name: "PKM", value: `\`'roubar cervejeria\`
          \`'roubar academia\``},
        )
        .setTimestamp()
        .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
        msg.edit(embed)
      })
      coletorV.on("collect", (r) => {
        r.users.remove(message.author)
        msg.edit(embedP)
      })
  })
}
exports.help = {
  name: "!armas"
}