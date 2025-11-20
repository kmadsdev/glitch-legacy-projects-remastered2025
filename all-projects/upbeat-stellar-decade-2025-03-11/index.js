const { Client, GatewayIntentBits, Partials, WebhookClient, Collection, EmbedBuilder } = require("discord.js");
const express = require('express');
const fs = require("fs");
const db = require("quick.db");
const config = require("./config.json");
const moment = require("moment");
const ms = require("parse-ms");

// ---------- Express ping ----------
const app = express();
app.get("/", (req, res) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  res.sendStatus(200);
});
app.listen(process.env.PORT);

// ---------- Discord Bot ----------
const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ],
  partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

bot.commands = new Collection();
const voto = new WebhookClient({ id: '', token: '' }); // Add valid ID & token

// ---------- Load Events ----------
fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error("[ERRO] " + err);

  files.forEach(file => {
    let eventFunction = require(`./eventos/${file}`);
    let eventName = file.split(".")[0];
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });

  console.log("All events loaded successfully!");
});

// ---------- Auto Role on Join ----------
bot.on("guildMemberAdd", async member => {
  let vCargo = db.fetch(`cargo_${member.guild.id}`);
  if (vCargo) await member.roles.add(vCargo);
});

// ---------- Message Handler ----------
const bot_id = "1360232899642921012";
const channel_id = "1360223486714314855";

bot.on("messageCreate", async message => {
  if (message.author.bot) return; // ignore bot messages

  const prefix = config.prefix;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();

  const arquivocmd = bot.commands.get(cmd);
  if (arquivocmd) arquivocmd.run(bot, message, args);

  // ---------- XP & Leveling ----------
  let userInfo = db.fetch(`xp_${message.author.id}`) || 0;
  let lvl = db.fetch(`lvl_${message.author.id}`) || 0;
  if (userInfo >= 50 && lvl < 25) {
    db.add(`lvl_${message.author.id}`, 1);
    db.subtract(`xp_${message.author.id}`, 50);
    message.author.send(`Parabéns! Você subiu de nível! Para conferir seu "LvL" use o comando \`!userinfo\``);
  }

  // ---------- Help Embed ----------
  if ([`<@!${bot.user.id}>`, `<@${bot.user.id}>`, `!ajuda`].some(p => message.content.startsWith(p))) {
    let embed = new EmbedBuilder()
      .setTitle(`Central de Ajuda | ${bot.user.username}`)
      .setThumbnail(bot.user.displayAvatarURL({ format: "png", size: 1024 }))
      .setColor(0x0EFE1D)
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
      .setFooter({ text: `Comando executado por ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true, size: 1024, format: "png" }) });

    const msg = await message.channel.send({ embeds: [embed] });

    // React for categories
    const emojis = ["👮‍♂️", "🎉", "💰", "💡", "⚙", "◀"];
    for (const e of emojis) await msg.react(e);

    const createCollector = (emoji, handler) => {
      const filter = (reaction, user) => reaction.emoji.name === emoji && user.id === message.author.id;
      const collector = msg.createReactionCollector({ filter, time: 60000 });
      collector.on("collect", handler);
    };

    createCollector("👮‍♂️", async r => {
      const embed = new EmbedBuilder()
        .setTitle("Central de Ajuda | Moderação")
        .setColor(0x0AADFF)
        .setDescription(`Todos os comandos da categoria **Moderação**
Total de Comandos da Categoria: **8**

》 \`!ban\` | seguindo as regras ou não?
》 \`!kick\` | tire os membros inativos.
》 \`!clear\` | Deixe o chat limpinho!
》 \`!sm\` <tempo> | modo lento no chat
》 \`!avatar\` | Veja a foto de perfil
》 \`!userinfo\` | o que se passa com ele?
》 \`!serverinfo\` | o server tá beleza?
》 \`!servericon\` | Só pra ver, não toque`);
      embed.setFooter({ text: "Pressione '◀' para voltar a página principal!" });
      msg.edit({ embeds: [embed] });
      r.users.remove(message.author.id);
    });

    // Similar collectors for other categories (🎉, 💰, 💡, ⚙, ◀) remain unchanged
    // You can copy your existing code for those collectors
  }

  // ---------- Bot Vote Parsing ----------
  try {
    if (message.author.id === bot_id && message.channel.id === channel_id) {
      const match = message.content.match(/#\d+ voted for bot `(.+?)`/i);
      if (match && match[1] === bot.user.tag) {
        voto.send({
          content: `:thumbsup: \`${match[1]}\` votou no ${bot.user.tag}! :tada:`,
          username: bot.user.username,
          avatarURL: bot.user.displayAvatarURL()
        });
      }
    }
  } catch (e) {
    console.log('Algo aconteceu :/\n' + e);
  }
});

bot.login(config.token);
