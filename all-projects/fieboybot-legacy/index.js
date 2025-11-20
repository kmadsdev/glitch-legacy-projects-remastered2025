const express = require('express');
const Discord = require("discord.js");
const config = require("./config.json");
const db = require("quick.db");
const fs = require("fs");
const ms = require("parse-ms");

const app = express();
const bot = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS",
    "DIRECT_MESSAGES",
    "MESSAGE_CONTENT"
  ]
});

app.get("/", (req, res) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  res.sendStatus(200);
});
app.listen(process.env.PORT);
bot.commands = new Discord.Collection();


fs.readdir("./comandos", (err, files) => {
  if (err) console.error(err);
  let arquivos = files.filter(f => f.split(".").pop() === "js");
  arquivos.forEach(file => {
    let cmd = require(`./comandos/${file}`);
    bot.commands.set(cmd.help.name, cmd);
    console.log(`Comando ${file} carregado com sucesso!`);
  });
});


fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error("[ERRO] " + err);
  files.forEach(file => {
    let evento = require(`./eventos/${file}`);
    bot.on(file.split(".")[0], (...args) => evento.run(bot, ...args));
  });
});


bot.on("guildMemberAdd", async member => {
  let cargo = db.fetch(`cargo_${member.guild.id}`);
  if (cargo) member.roles.add(cargo).catch(() => false);
});


bot.on("messageCreate", async message => {

  if (message.author.bot || message.channel.type === "dm") return;

  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) {
    // Sistema de XP
    db.add(`xp_${message.author.id}`, 1);
    let xp = db.fetch(`xp_${message.author.id}`) || 0;
    let lvl = db.fetch(`lvl_${message.author.id}`) || 0;

    if (xp >= 50) {
      if (lvl < 25) {
        db.add(`lvl_${message.author.id}`, 1);
        db.subtract(`xp_${message.author.id}`, 50);
        message.author.send(`Parabéns! Você subiu de nível! Use \`'userinfo\``);
      }
    }

    // Resposta ao mencionar o bot
    if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) {
      let embed = new Discord.MessageEmbed()
        .setTitle(bot.user.username)
        .setThumbnail(bot.user.displayAvatarURL())
        .setColor("RANDOM")
        .setDescription(`Olá <@${message.author.id}>! Meu prefixo nesse servidor é **\`${prefix}\`** e meu comando de ajuda é **\`!ajuda\`**`)
        .setTimestamp()
        .setFooter(`Menção por ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, size: 1024 }));

      message.channel.send({ embeds: [embed] });
    }

    return;
  }

  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();
  let comando = bot.commands.get(cmd);

  if (comando) comando.run(bot, message, args);
});


bot.login(config.token);
