const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const bot = new Discord.Client();
const config = require("./config.json");
const fetch = require("node-fetch");
const moment = require("moment");
const db = require("quick.db");
const ms = require("parse-ms");
const fs = require("fs");
bot.commands = new Discord.Collection()
const voto = new Discord.WebhookClient('', '')

fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error("[ERRO] " + err);
    files.forEach(file => {
        let eventFunction = require(`./eventos/${file}`);
        let eventName = file.split(".")[0];
        bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
    });
 });

bot.on("guildMemberAdd", async member => {
  let vCargo = db.fetch(`cargo_${member.guild.id}`)
  if (!vCargo) {
    return;
  } else {
    await member.roles.add(vCargo)
  }
})



const bot_id = "726233997616611368" // BOT = Bots Para Discord 550305758583980042
const channel_id = "718621496515362871"



bot.on("message", async message => {
  
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let arquivocmd = bot.commands.get(cmd.slice(prefix.lenght));
  if (arquivocmd) arquivocmd.run(bot, message, args);
 
  let userInfo = db.fetch(`xp_${message.author.id}`)
  let lvl = db.fetch(`lvl_${message.author.id}`)
  if (userInfo >= 50) {
    if (lvl >= 25) return;
    db.add(`lvl_${message.author.id}`, 1)
    db.subtract(`xp_${message.author.id}`, 50)
    message.author.send(`Parabéns! Você subiu de nível! Para conferir seu "LvL" use o comando \`!userinfo\``)
  }
  
  // const db = require("quick.db")
  // db.add(`xp_${message.author.id}`, 1)
  
  if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)){
          let embed = new Discord.MessageEmbed()
          .setTitle(`Central de Ajuda | ${bot.user.username}`)
    .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
    .setColor("0EFE1D")
    .setDescription(`:gear:  | Olá! <@${message.author.id}> , Essa é minha **Central de Ajuda** onde você pode ver todos os meus comandos!

Só lembrando, que meu prefixo é \`!\`

Tenho no total **__36__ Comandos!**
Liks: [YouTube](https://youtube.fireboy.ml/) // [Twitch](https://twitch.tv/keiqms_wow/) // [Discord](https://discord.fireboy.ml/) // [Website](https://fireboy.ml/) // [Twitter](https://twitter.com/fireboyofc/)

Agora, vamos as categorias de comandos:

👮‍♂️ | Moderação
🎉 | Diversão
💰 | Economia
💡 | Adicionais
⚙ | Configurações`)
    .setTimestamp()
    .setFooter(`Comando executado por ${message.author.tag}`,`${message.author.displayAvatarURL({dynamic: true,size: 1024,format: "png"})}`);
  message.channel.send(embed).then(msg => {
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
      msg.edit(embed)
      r.users.remove(message.author)
    })
  });
};
  try {
    // Verifica se a mensssagem enviada é no canal especificado acima, e reparte toda a menssagem (caso seja)
    if (message.author.id === bot_id && message.channel.id === channel_id) {
      let separador = message.content.split(' ')
      let parte_1 = message.content.substr(message.content.indexOf("#"))
      let parte_2 = parte_1.substr(7)
      let parte_3 = parte_2.substr(parte_2.indexOf(")", "."))
      parte_2.replace(parte_3, "")
      
      let bot_name_1 = parte_3.replace(") votou no bot **`", '')
      let bot_name_2 = bot_name_1.replace("`**.", '')
      let bot_name_3 = bot_name_2.replace(`https://botsparadiscord.com/bots/${bot.user.id}`, '')
      let bot_name_4 = bot_name_3.replace("<>", '')
      let bot_name_final = bot_name_4.replace(/(\r\n|\n|\r)/gm, "")

      // Aqui verifica se a menssagem repartida tem a tag do seu bot
      if (bot_name_final === bot.user.tag) { // Defina a tag do seu bot ex: 'bot#0000' ou 'bot.user.tag' || 'client.user.tag'

        voto.send(`:thumbsup: \`` + separador[1] + `\` votou no ${bot.user.tag}! :tada:\n`, {
          username: bot.user.username, //Definição do nome do WebHook
          avatarURL: bot.user.displayAvatarURL // Definição da imagem do WebHook
        })
      }
    }
  } catch (e) {
    console.log('Algo aconteceu :/\n' + e)
  }
 
const Discord = require("discord.js")
console.log(frase1)
console.log(frase2)
let frase1 = "Já acordei!"
let frase2 = "Bora trabalhar?"

  
});

bot.login(config.token)



