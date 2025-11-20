const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
  let random = "RANDOM"
  let embed = new Discord.MessageEmbed()
  .setTitle("Empregos")
  .setColor("RANDOM")
  .setDescription(`Seja Bem Vindo a **Lista de Empregos**
Você pode adquirir seu emprego aqui. Quanto maior o emprego, mais ganhos
Aperte em "1️⃣" para ver os empregos iniciais
Aperte em "2️⃣" para ver os 'melhores empregos'
Aperte em "3️⃣" para ver os comandos dos empregos

||Para se juntar a uma empresa, use \`'juntar <nome da empresa(se tiver espaços, no lugar, coloque "-")\`||`)
  .setTimestamp()
  .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
  message.channel.send(embed).then(msg => {
    msg.react("1️⃣")
    msg.react("2️⃣")
    msg.react("3️⃣")
    msg.react("◀")
    let filtro1 = (r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id;
    let filtro2 = (r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id;
    let filtro3 = (r, u) => r.emoji.name === "3️⃣" && u.id === message.author.id;
    let filtroV = (r, u) => r.emoji.name === "◀" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1)
    let coletor2 = msg.createReactionCollector(filtro2)
    let coletor3 = msg.createReactionCollector(filtro3)
    let coletorV = msg.createReactionCollector(filtroV)
    coletor1.on("collect", (r) => {
      let embed1 = new Discord.MessageEmbed()
      .setTitle("Lista dos empregos | Iniciais")
      .setColor("RANDOM")
      .addFields(
      {name: "Entregador de Pizza", value: `Nível Requirido: 0
Ganhos por trabalho: **RS 100**
Tempo para trabalhar novamente: **1 Hora e 30 Minutos**`},
        {name: "Gari", value: `Nível Requirido: 0
Ganhos por trabalho: **R$ 500**
Tempo para trabalhar novamente: **3 Horas**`},
        {name: "Frentista", value: `Nível Requirido: 0
Ganhos por trabalho: **R$ 200**
Tempo para trabalhar novamente: **2 Horas**`},
        {name: "Moto Taxi", value: `Nível Requirido: 0
Ganhos por trabalho: **R$ 150**
Tempo para trabalhar novamente: **1 Hora e 45 Minutos**`},
        {name: "Fazendeiro", value: `Nível Requirido: 0
Ganhos por trabalho: **R$ 300**
Tempo para trabalhar novamente: **2 Horas e 30 Minutos**`}
      )
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
      msg.edit(embed1)
      r.users.remove(message.author)
    })
    coletor2.on("collect", (r) => {
      let embed2 = new Discord.MessageEmbed()
      .setTitle("Lista dos empregos | Melhores")
      .setColor("RANDOM")
      .addFields(
      {name: "Policial", value: `Nível Requirido: 15
Ganhos por trabalho: **R$ 700**
Tempo para trabalhar novamente: **5 Horas**`},
      {name: "Carteiro", value: `Nível Requirido: 10
Ganhos por trabalho: **R$ 650**
Tempo para trabalhar novamente: **4 Horas e 30 Minutos**`},
      {name: "Barman", value: `Nível Requirido: 5
Ganhos por trabalho: **F$ 600**
Tempo para trabalhar novamente: **4 Horas**`},
      {name: "Médico", value: `Nível Requirido: 25
Ganhos por trabalho: **F$ 800**
Tempo para trabalhar: **6 Horas**`},
      {name: "Advogado", value: `Nível Requirido: 20
Ganhos por trabalho: **F$ 750**
Tempo para trabalhar novamente: **5 Horas e 30 Minutos**`},
      )
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
      msg.edit(embed2)
      r.users.remove(message.author)
    })
    coletor3.on("collect", (r) => {
      let embed3 = new Discord.MessageEmbed()
      .setTitle("Lista de empregos | Comandos")
      .setColor(random)
      .addFields(
      {name: "Entregador de Pizza", value: `\`'entregar\``},
      {name: "Gari", value: `\`'coletar\``},
      {name: "Frentista", value: `\`'abastecer\``},
      {name: "Moto Taxi", value: `\`'dirigir\``},
      {name: "Fazendeiro", value: `\`'plantar\``},
      {name: "Policial", value: `\`'patrulhar\``},
      {name: "Carteiro", value: `\`'mercadoria\``},
      {name: "Barman", value: `\`'vender\``},
      {name: "Médico", value: `\`'consultar\``},
      {name: "Advogado", value: `\`'prender\``},
      )
      .setTimestamp()
      .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
      msg.edit(embed3)
      r.users.remove(message.author)
      })
    coletorV.on("collect", (r) => {
      msg.edit(embed)
      r.users.remove(message.author)
    })
  })
}
exports.help = {
  name: "'empregos"
}