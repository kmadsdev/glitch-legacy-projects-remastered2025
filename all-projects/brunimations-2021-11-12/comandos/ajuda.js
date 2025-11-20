const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (bot, message, args) => {
  db.add(`xp_${message.author.id}`, 1)
  let embedP = new Discord.MessageEmbed()
    .setTitle("**Central de Ajuda | Brunimations Kingdom**")
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
    .setColor("YELLOW")


// ↓ - - - - - - - - - - - - - - - - - - - - ↓ PRINCIPAL ↓ - - - - - - - - - - - - - - - - - - - - ↓
    .setDescription(`
👥 | Ajuda para Membros
🔑 | Ajuda para Moderadores`)
// ↑ - - - - - - - - - - - - - - - - - - - - ↑ PRINCIPAL ↑ - - - - - - - - - - - - - - - - - - - - ↑


    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true,size: 1024,format: "png"})}`);
  message.channel.send(embedP).then(msg => {
    msg.react("👥");
    msg.react("🔑");
    msg.react("◀");
   
    let filtro1 = (r, u) => r.emoji.name === "👥" && u.id === message.author.id;
    let coletor1 = msg.createReactionCollector(filtro1);
    let filtro2 = (r, u) => r.emoji.name === "🔑" && u.id === message.author.id;
    let coletor2 = msg.createReactionCollector(filtro2);
    let filtroV = (r, u) => r.emoji.name === "◀" && u.id === message.author.id;
    let coletorV = msg.createReactionCollector(filtroV);
    coletor1.on("collect", async (r) => {
      let embed = new Discord.MessageEmbed()
        .setTitle("**Central de Ajuda | Membros**")
        .setColor("GREEN")


// ↓ - - - - - - - - - - - - - - - - - - - - ↓ MEMBROS ↓ - - - - - - - - - - - - - - - - - - - - ↓
        .setDescription(`**Importante**
.userinfo | Mostra informações básicas do(a) usuário(a)
.serverinfo | Mostra informações básicas do servidor
.servericon | Mostra o ícone do servidor

**Diversão**
.ping | Mostra o ping do bot
.avatar <@usuário> | Mostra o avatar de alguém no servidor
.slap <@usuário>
.abraçar <@usuário>
.kiss <@usuário>
.say <@usuário>
.mcbody <nickname do minecraft>
.mchead <nickname do minecraft>
.mensagem | Mude a mensagem do !userinfo`)
// ↑ - - - - - - - - - - - - - - - - - - - - ↑ MEMBROS ↑ - - - - - - - - - - - - - - - - - - - - ↑


      .setTimestamp()
      .setTimestamp()
      .setFooter("Pressione '◀' para voltar a página principal!")
      msg.edit(embed)
      r.users.remove(message.author)
    })
    coletor2.on("collect", async (r) => {
if (!message.member.hasPermission("ADMINISTRADOR")) return message.reply(":x: | Você precisa da permissão `Administrador` para executar esse comando!")
      let embed = new Discord.MessageEmbed()
      .setTitle("**Central de Ajuda | Moderadores**")
      .setColor("RED")


// ↓ - - - - - - - - - - - - - - - - - - - - ↓MDOERADORES ↓ - - - - - - - - - - - - - - - - - - - - ↓
      .setDescription(`.ban <@usuário> | Banir algum membro (permanente)
.kick <@usuário> | Expulsar algum membro (temporário)
.clear <quantidade de mensagens> | Limpar determinanda quantidade de mensagens no chat
.userinfo | Mostra informações básicas do(a) usuário(a)
.serverinfo | Mostra informações básicas do servidor
.servericon | Mostra o ícone do servidor
.ping | Mostra o ping do bot
.avatar <@usuário> | Mostra o avatar de alguém no servidor
.slap <@usuário>
.abraçar <@usuário>
.kiss <@usuário>
.say <@usuário>
.mcbody <nickname do minecraft>
.mchead <nickname do minecraft>
.yt <link do vídeo> envia uma mensagem com o link (com everyone)
.live <youtube/twitch> envia uma mensagem com o link da twitch/youtube do brunimations`)
// ↑ - - - - - - - - - - - - - - - - - - - - ↑ MDOERADORES ↑ - - - - - - - - - - - - - - - - - - - - ↑


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
  name: `.ajuda`
};




