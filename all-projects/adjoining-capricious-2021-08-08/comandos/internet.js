const Discord = require("discord.js");
const db = require("discord.js")
exports.run = async (bot, message, args) => {
      let embedP = new Discord.MessageEmbed()
      .setTitle("Loja Online!")
      .setColor("RANDOM")
      .setDescription(`Opa! Somos a Loja Online da Isabela!
Não temos muitos produtos... Mas, sempre com sua sugestão, podem aumentar nossa loja!

**Comprar Empresa** - *Compre uma empresa e seja um bilionário!* Valor: **F$ 50,000**`)
      .setTimestamp()
      .setFooter(`Aperte em "▶" para ver os comandos| Executado por ${message.author.tag}`)
  message.channel.send(embedP).then(msg => {
    msg.react("◀")
    msg.react("▶")
    let filtro = (reaction, usuario) => reaction.emoji.name === "▶" && usuario.id === message.author.id;
    let coletor = msg.createReactionCollector(filtro)
    let filtroV = (reaction, usuario) => reaction.emoji.name === "◀" && usuario.id === message.author.id;
    let coletorV = msg.createReactionCollector(filtroV)
    
    coletor.on("collect", (reaction) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Comandos | Loja Online")
      .setColor("RANDOM")
      .setDescription(`Todos os Comandos!

**Comprar Empresa** - \`i!comprar-empresa\`

**Notebook** - \`i!comprar-notebook\``)
      .setTimestamp()
      .setFooter(`Aperte em "◀" para voltar a tela iniciar | Executado por ${message.author.tag}`)
      msg.edit(embed)
      reaction.users.remove(message.author)
    })
    coletorV.on("collect", (r) => {
      msg.edit(embedP)
      r.users.remove(message.author)
    })
    
  })
}
exports.help = {
  name: "i!internet"
}