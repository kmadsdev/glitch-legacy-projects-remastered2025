const express = require('express');
const app = express();
const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fetch = require("node-fetch");
const moment = require("moment");
const db = require("quick.db");
const ms = require("parse-ms");
const fs = require("fs");

bot.commands = new Discord.Collection()
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);


fs.readdir("./commands", (err, files) => {
  if (err) { console.error(err) }
  let arquivojs = files.filter(f => f.split(".").pop() === "js");

  arquivojs.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`Command ${f} imported sucessfully!`)
    bot.commands.set(props.help.name, props)
  })
})


fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error("[Error] " + err);
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


bot.on("message", async message => {
  if (message.author.bot || message.channel.type === "dm") { return }

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let arquivocmd = bot.commands.get(cmd.slice(prefix.lenght));
  let userInfo = db.fetch(`xp_${message.author.id}`)
  let lvl = db.fetch(`lvl_${message.author.id}`)
  
  if (arquivocmd) { arquivocmd.run(bot, message, args) }
  if (userInfo >= 50) {
    if (lvl >= 25) { return }
    db.add(`lvl_${message.author.id}`, 1)
    db.subtract(`xp_${message.author.id}`, 50)
    message.author.send("Congrats! You just leveled up! to check your level out use \'!userinfo\'")
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
          {name: "Me adicione em seu servidor", value: "[Clicando Aqui!](https://discordapp.com/api/oauth2/authorize?client_id=694975753418440844&permissions=8&scope=bot)"},
          {name:"Você também pode entrar em meu servidor de suporte!", value: "[Clicando Aqui](https://discord.gg/rnXbxuy)"},
          )
          .setTimestamp()
          .setFooter(`Menção executada por ${message.author.tag}`, `${message.author.displayAvatarURL({dynamic: true, size: 1024, format: "png"})}`)
  message.channel.send(embed)
  }  
});

bot.login(config.token)
