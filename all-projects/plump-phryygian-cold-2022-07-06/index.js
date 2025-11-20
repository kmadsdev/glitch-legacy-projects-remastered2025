const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require(`discord.js`);
const bot = new Discord.Client();
const config = require("./config.json");
const fetch = require("node-fetch");
const moment = require("moment");
const db = require("quick.db");
const ms = require("parse-ms");
const fs = require("fs");
bot.commands = new Discord.Collection()
const voto = new Discord.WebhookClient('', '')

// - - - - - - - - -  - - - -  - - - -  - - - -  - - - -  - - - -  - - - -  - - - -  - - - -  - - - -  - - - -  - - - -  - - - -  - - - -  - - - - - - - -  

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



const bot_id = "983438653663608862" // BOT = Bots Para Discord 550305758583980042
const channel_id = "955223934352109628"



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













