const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
  let embedP = new Discord.MessageEmbed()
    .setTitle(`Central de Ajuda | ${bot.user.username}`)
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
    .setColor("0EFE1D")
    .setDescription(`Olá! ${message.author.name}, Como eu poderia ajudar você?

Agora, vamos as categorias de comandos:

👮‍♂️ | Moderação
🎉 | Diversão
💰 | Economia
💡 | Adicionais
⚙ | Configurações`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true,size: 1024,format: "png"})}`);
  message.channel.send(embedP).then(msg => {
    msg.react("👮‍♂️");
    msg.react("🎉");
    msg.react("💰");
    msg.react("💡");
    msg.react("⚙");
    msg.react("◀");
    let filtro1 = (r, u) => r.emoji.name === "👮‍♂️" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1);
    let filtro2 = (r, u) => r.emoji.name === "🎉" && u.id === message.author.id;
    let coletor2 = msg.createReactionCollector(filtro2);
    let filtro3 = (r, u) => r.emoji.name === "💰" && u.id === message.author.id;
    let coletor3 = msg.createReactionCollector(filtro3);
    let filtro4 = (r, u) => r.emoji.name === "💡" && u.id === message.author.id;
    let coletor4 = msg.createReactionCollector(filtro4);
    let filtro5 = (r, u) => r.emoji.name === "⚙" && u.id === message.author.id;
    let coletor5 = msg.createReactionCollector(filtro5);
    let filtroV = (r, u) => r.emoji.name === "◀" && u.id === message.author.id;
    let coletorV = msg.createReactionCollector(filtroV);
    coletor1.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("Central de Ajuda | Moderação")
        .setColor("0AADFF")
        .setDescription(`Todos os comandos da categoria **Moderação**
Total de Comandos da Categoria: **8**

》 \`!ban\` | seguindo as regras ou não?\ 
》 \`!kick\` | tire os membros inativos.\ 
》 \`!clear\` | Deixe o chat limpinho!\ 
》 \`!sm\` <tempo> | modo lento mo chat\ 
》 \`!avatar\` | Veja a foto de perfil\ 
》 \`!userinfo\` | o que se passa com ele?\ 
》 \`!serverinfo\` | o server tá beleza?\ 
》 \`!servericon\` | Só pra ver, não toque\ `)
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
      msg.edit(embedP)
      r.users.remove(message.author)
    })
  });
};
exports.help = {
  name: "!ajuda"
};