const Discord = require("discord.js");
const db = require("quick.db")
exports.run = async (bot, message, args) =>  {
  message.delete()
  if (!args.join(" ")) return message.reply("Informe o link do vídeo!")
const channel = bot.channels.cache.get('740531801310887936');
channel.send(`||                                   @everyone                                   ||
**Vídeo novo do Brunimations! Vai lá assistir UwU**
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
› ${args.slice(0).join(" ")}`);
}

exports.help = {
  name: ".yt"
}
