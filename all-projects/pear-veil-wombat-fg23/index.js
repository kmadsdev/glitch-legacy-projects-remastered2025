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

fs.readdir("./comandos", (err, files) => {
  if (err) console.error(err);
  let arquivojs = files.filter(f => f.split(".").pop() === "js");
  arquivojs.forEach((f, i) => {
    let props = require(`./comandos/${f}`)
    console.log(`Comando ${f} executado com sucesso!`)
    bot.commands.set(props.help.name, props)
  })
})

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



const bot_id = "871202411555999764" // BOT = Bots Para Discord 550305758583980042
const channel_id = "718621496515362871"



bot.on("message", async message => {
 
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  
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
          .setTitle(`${bot.user.username}`)
          .setThumbnail(bot.user.displayAvatarURL())
          .setColor("RANDOM")
          .setDescription(`Olá! <@${message.author.id}> Parece que você está com dúvida, meu prefixo nesse servidor é \`'\` e meu comando de ajuda é \`'ajuda\``)
          .addFields(
          {name: "Me adicione em seu servidor", value: "Desativado"},
          {name:"Você também pode entrar em meu servidor de suporte!", value: "Desativado"},
          )
          .setTimestamp()
          .setFooter(`Menção executada por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embed)
  }
  try {
    // Verifica se a mensssagem enviada é no canal especificado acima, e reparte toda a menssagem (caso seja)
    if (message.author.id === bot_id && message.channel.id === channel_id) {
      let separador = message.content.split(' ')
      let parte_1 = message.content.substr(message.content.indexOf("#"))
      let parte_2 = parte_1.substr(7)
      let parte_3 = parte_2.substr(parte_2.indexOf(")", "."))
      parte_2.replace(parte_3, "")
      

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
 
  
});

bot.login(config.token)
