const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
  let title = "Empresas"
  let color = "CDFF00"
  let description = `Seja Bem vindo a **Lista de Empresas**
Você pode adquirir sua empresa aqui, quanto mais cara a empresa, mais ganhos você tem!
Aperte em "1️⃣" para ver todas as empresas
Aperte em "2️⃣" para ver os comandos da empresa

**Quer comprar uma empresa?**
Use !comprar (ID Do item)/`
let title1 = "Lista das Empresas"
let color1 = "RANDOM"
let fieldTitle1_1 = "Restaurante"
let filedDescription1_2 = `Valor: **F$ 120,000**
Ganhos: **F$ 12,000** a cada **7 Horas**
ID: 100`
let fieldTitle2_1 = "Loja de Cosméticos"
let fieldDescription2_1 = `Valor: **F$ 70,000**
Ganhos: **F$ 7,000** a cada **7 Horas**
ID: 200`
let fieldTitle3_1 = "Cervejaria"
let fieldDescription3_1 = `Valor: **F$ 200,000**
Ganhos: **F$ 20,000** a cada **7 Horas**
ID: 300`
let fieldTitle4_1 = "Academia"
let fieldDescription4_1 = `Valor: **F$ 200,000**
Ganhos: **F$ 20,000** a cada **7 Horas**
ID: 400`
let fieldTitle5_1 = "Laboratório"
let fieldDescription5_1 = `Valor: **F$ 180,000**
Ganhos: **F$ 18,000** a cada **7 Horas**
ID: 500`
let fieldTitle6_1 = "Jogos"
let fieldDescription6_1 = `Valor: **F$ 190,000**
Ganhos: **19,000** a cada **7 Horas**
ID: 600`
let fieldTitle7_1 = "Streaming"
let fieldDescription7_1 = `Valor: **F$ 150,000**
Ganhos: **15,000** a cada **7 Horas**
ID: 700`
let fieldTitle8_1 = "Material de Construção"
let fieldDescription8_1 = `Valor: **F$ 170,000**
Ganhos: **17,000** a cada **7 Horas**
ID: 800`
let embedP = new Discord.MessageEmbed()
.setTitle(title1)
.setColor(color)
.setDescription(description)
.setTimestamp()
.setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
message.channel.send(embedP).then(msg => {
  msg.react("1️⃣")
  msg.react("2️⃣")
  msg.react("◀")
  let filtro1 = (r, u) => r.emoji.name === "1️⃣" && u.id === message.author.id;
  let coletor1 = msg.createReactionCollector(filtro1)
  let filtro2 = (r, u) => r.emoji.name === "2️⃣" && u.id === message.author.id;
  let coletor2 = msg.createReactionCollector(filtro2)
  let coletorV = msg.createReactionCollector((r, u) => r.emoji.name === "◀" && u.id === message.author.id)
  coletor1.on("collect", (r) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Lista de Empresas")
    .setColor(color)
    .addFields(
    {name: fieldTitle1_1, value: filedDescription1_2},
    {name: fieldTitle2_1, value: fieldDescription2_1},
    {name: fieldTitle3_1, value: fieldDescription3_1},
    {name: fieldTitle4_1, value: fieldDescription4_1},
    {name: fieldTitle5_1, value: fieldDescription5_1},
    {name: fieldTitle6_1, value: fieldDescription6_1},
    {name: fieldTitle7_1, value: fieldDescription7_1},
    {name: fieldTitle8_1, value: fieldDescription8_1},
    )
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    msg.edit(embed)
    r.users.remove(message.author)
  })
  coletorV.on("collect", (r) => {
    msg.edit(embedP)
    r.users.remove(message.author)
  })
  coletor2.on("collect", (r) => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Lista de Empresas | Comandos")
    .setColor("RANDOM")
    .addFields(
    {name: "Restaurante", value: `\`!lucro restaurante\``},
      {name: "Loja de Cosméticos", value: `\`!lucro loja-de-cosmeticos\``},
      {name: "Cervejaria", value: `\`!lucro cervejaria\``},
      {name: "Academia", value: `\`!lucro academia\``},
      {name: "Laboratório", value: `\`!lucro laboratorio\``},
      {name: "Jogos", value: `\`!lucro jogos\``},
      {name: "Streaming", value: `\`!lucro streaming\``},
      {name: "Material de Construção", value: `\`'lucro material-de-construção\``},
    )
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, format: "png"})}`)
    msg.edit(embed)
    r.users.remove(message.author)
  })
})
}
exports.help = {
  name: "!empresas"
}