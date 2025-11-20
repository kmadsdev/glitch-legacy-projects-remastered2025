const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {
  let embedP = new Discord.MessageEmbed()
    .setTitle(`Central de Ajuda`)
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
    .setColor("0EFE1D")
    .setDescription(`
**Categorias de comandos**
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
        .setDescription(`Comandos de Moderação

》 \`!ban\`\ 
》 \`!kick\`\ 
》 \`!clear\`\ 
》 \`!sm\` <tempo>\ 
》 \`!avatar\`\ 
》 \`!userinfo\`\ 
》 \`!serverinfo\`\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    });
    coletor2.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Diversão")
      .setColor("0AFF76")
      .setDescription(`Comandos de Diversão

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
      .setDescription(`TComandos de Economia

》 \`!saldo <@usuário>\`
》 \`!give <@usuário> <quantidade>\`
》 \`!daily\`
》 \`!apostar <@usuário> <quantidade>\`
》 \`!pay <@usuário> <quantidade>\`
》 \`!armas\`
》 \`!empresas\`
》 \`!empregos\`
》 \`!take\``)
      .setTimestamp()
      .setFooter("Presione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor4.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Adicionais")
      .setColor("FFAD0A")
      .setDescription(`omandos Adicionais

》 \`!ping\`
》 \`!sobremim\`
》 \`!ontime\`
》 \`!status\`
》 \`!bug\`
》 \`!suporte\`
》 \`!créditos\`
》 \`!invite\`
》 \`!cpu\``)
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor5.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
      .setTitle("Central de Ajuda | Configuração")
      .setColor("RANDOM")
      .setDescription(`Comandos de Configuração

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

