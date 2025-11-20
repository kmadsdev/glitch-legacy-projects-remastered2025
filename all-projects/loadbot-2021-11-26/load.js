const BotLoad = require('loadbot.js')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
let embed = new Discord.MessageEmbed()
//EMBED TITLE
    .setTitle(`TESTECOMMAND`)
//EMBED THUNINBANIL
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
//EMBED COLOR
    .setColor("RANDOM")
//EMBED DESCRIPTION
    .setDescription(`This is a test (normal)
**This is a test** (bold)
*This is a test* (italian)
~~this is a test~~ (cutted)

psst, this is a test command for test JAVASCRIPT from FIREBOY, if you entered here with the link you can copy`)
    .setTimestamp()
    .setFooter(`Command executed by ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true,size: 1024,format: "png"})}`);
  message.channel.send(embed).then(msg => {
    msg.react("👤");
    msg.react("🤔");
    msg.react("🤢");
    let filtro1 = (r, u) => r.emoji.name === "👤" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1);
    let filtro2 = (r, u) => r.emoji.name === "🤔" && u.id === message.author.id;
    let coletor2 = msg.createReactionCollector(filtro2);
    let filtro3 = (r, u) => r.emoji.name === "🤢" && u.id === message.author.id;
    let coletor3 = msg.createReactionCollector(filtro3);
    coletor1.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("Central de Ajuda | Moderação")
        .setColor("0AADFF")
        .setDescription(`TEST`)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    });
    coletor2.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Diversão")
      .setColor("0AFF76")
      .setDescription(`Todos os comandos da categoria **Diversão**
Total de Comandos da Categoria: **7**

》 \`!slap <@usuário>\`
》 \`!abraçar <@usuário>\`
》 \`!kiss <@usuário>\`
》 \`!say <Mensagem>\`
》 \`!mcbody <Nickname>\`
》 \`!mchead <Nickname>\`
》 \`!ascii\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor3.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Economia")
      .setColor("DEFF0A")
      .setDescription(`Todos os Comandos da Categoria **Economia**
Total de Comandos da Categoria: **9**

》 \`!saldo <@usuário>\`
》 \`!give <@usuário> <quantidade>\`
》 \`!daily\` pegue seus FB$ diários!
》 \`!apostar <@usuário> <quantidade>\`
》 \`!pay <@usuário> <quantidade>\`
》 \`!armas\` veja as armas disponíveis
》 \`!empresas\` vejas as oportunidades
》 \`!empregos\` Veja os trabalhos bons
》 \`!take\` apenas um comando... `)
      .setTimestamp()
      .setFooter("Presione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor4.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Adicionais")
      .setColor("FFAD0A")
      .setDescription(`Todos os Comandos da Categoria **Adicionais**
Total de Comandos da Categoria: **8**

》 \`!ping\` o discord ta com tudo isso de ms?
》 \`!sobremim\` saiba mais sobre um membro.
》 \`!ontime\` estou acordado a quanto tempo?
》 \`!status\` como eu estou, só sei que estou vivo
》 \`!bug\` Reporte algum bug do bot ou da loja.
》 \`!suporte\` Tá precisado de um ajudinha?
》 \`!créditos\` os desenvolvedores do bot legal
》 \`!invite\` desativado, pois sou um bot único!
》 \`!cpu\` Como estou de saúde hoje :D `)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor5.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Configuração")
      .setColor("RANDOM")
      .setDescription(`Todos os Comandos da Categoria **Configurações**
Total de Comandos da Categoria: **4**
》 \`!setautorole\`
》 \`!welcome\`
》 \`!leave\`
》 \`!desativar\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletorV.on("collect", async (r) => {
      msg.edit(embed)
      r.users.remove(message.author)
    })
  });
};
exports.help = {
  name: "!ajuda"
};